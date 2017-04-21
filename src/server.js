/**
 * server.js
 * src
 *
 * Created by samover on 15/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const express = require('express');

/*
 * MODULE CONFIGURATION
 */
require('./config/environment.config');
global.diContainer = require('./config/diContainer.config');

const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');

const helmet = require('./middlewares/helmet.middleware');
const logger = require('./middlewares/logger.middleware');

const UserController = require('./controllers/user.controller');

const winston = diContainer.cradle.logger;
const port = process.env.PORT || 3000;
const app = express();

app.use(helmet);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'test') app.use(logger);

/*
 * ROUTE DECLARATIONS
 */
app.use('/users', UserController.create());

// Catch all unknown routes.
app.all('*', (req, res) => { return res.sendStatus(404); });

app.use(errorHandler);

/*
 * START SERVER
 */

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        winston.info(`Server listening on port ${port}`);
    });
}

process.on('unhandledRejection', (reason) => {
    winston.warn('Undhandled Rejection', reason);
});

process.on('warning', (warning) => {
    winston.warn(warning.stack);
});

module.exports = app;

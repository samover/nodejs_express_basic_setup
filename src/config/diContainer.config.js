/**
 * diContainer.config.js
 * src/config
 *
 * Created by samover on 23/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const awilix = require('awilix');

const di = awilix.createContainer();

di.loadModules([
    'src/models/db.js',
    'src/config/**/*.js',
], {
    formatName: 'camelCase',
    registrationOptions: {
        lifetime: awilix.Lifetime.SINGLETON
    },
});

module.exports = di;

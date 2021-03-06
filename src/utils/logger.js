/**
 * index.js
 * src/logger
 *
 * Created by samover on 06/04/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const winston = require('winston');

module.exports = class Logger {
    constructor() {
        this.defaultLogLevel = process.env.DEFAULT_LOG_LEVEL || 'info';
        this.logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({
                    timestamp: true,
                    colorize: true,
                    prettyPrint: true,
                    level: process.env.LOG_LEVEL || this.defaultLogLevel,
                })
            ]
        });
    }

    info(log, metadata) {
        this.logger.info(log, metadata);
    }

    warn(log, metadata) {
        return this.logger.warn(log, metadata);
    }

    error(log, metadata) {
        return this.logger.error(log, metadata);
    }

    debug(log, metadata) {
        return this.logger.debug(log, metadata);
    }
};

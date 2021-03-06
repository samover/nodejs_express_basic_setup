/**
 * database.config.js
 * src/config
 *
 * Created by samover on 13/03/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const env = process.env.NODE_ENV || 'development';
const config = require('../../database.json')[env];

module.exports = class DatabaseConfig {
    constructor() {
        this.config = config;
    }

    getUsername() {
        return this.config.username;
    }

    getPassword() {
        return this.config.password;
    }

    getDatabase() {
        return this.config.database;
    }

    getHost() {
        return this.config.host;
    }

    getDialect() {
        return this.config.dialect;
    }

    getLogging() {
        return this.config.logging;
    }

    getHerokuDbUrl() {
        return process.env[this.config.use_env_variable];
    }

    isOnHeroku() {
        return this.config.use_env_variable !== undefined;
    }
};

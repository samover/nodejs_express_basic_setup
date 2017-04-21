/**
 * db.js
 * src/models
 *
 * Created by samover on 13/03/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

module.exports = class Database {
    constructor() {
        this._basename = path.basename(__filename);
        this._models = {};
        this._databaseOptions = {
            logging: false,
            dialect: 'postgres',
            native: false,
            pool: { maxConnections: 100, minConnections: 0 },
            dialectOptions: {
                ssl: true,
                native: false,
            },
        };
        this._sequelize = this._getSequelizeInstance();
        this._importModels();
    }

    _getSequelizeInstance() {
        const dbConfig = diContainer.cradle.databaseConfig;

        if (dbConfig.isOnHeroku()) return new Sequelize(dbConfig.getHerokuDbUrl(), this._databaseOptions);
        return new Sequelize(dbConfig.getDatabase(), dbConfig.getUsername(), dbConfig.getPassword(), dbConfig.config);
    }

    _importModels() {
        fs.readdirSync(__dirname)
            .filter((file) => {
                return (file.indexOf('.') !== 0) && (file !== this._basename) && (file.slice(-3) === '.js');
            })
            .forEach((file) => {
                const model = this._sequelize.import(path.join(__dirname, file));
                this._models[model.name] = model;
            });

        Object.keys(this._models).forEach((modelName) => {
            if (this._models[modelName].associate) {
                this._models[modelName].associate(this._models);
            }
        });
    }

    getModels() {
        return this._models;
    }

    getSequelize() {
        return this._sequelize;
    }
};

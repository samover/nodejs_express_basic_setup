/**
 * user.model.js
 * src/models
 *
 * Created by samover on 22/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname: {
            type: DataTypes.STRING,
            unique: true,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        lang: {
            type: DataTypes.ENUM('en', 'nl', 'fr'),
        }
    }, {
        classMethods: {
            associate: (models) => {
                // implement
            },
        },
    });

    return User;
};

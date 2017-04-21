/**
 * 20170222210827-create-user.js
 * migrations
 *
 * Created by samover on 23/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fistname: {
                type: Sequelize.STRING,
                unique: true,
            },
            lastname: {
                type: Sequelize.STRING,
                unique: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Users', { cascade: true });
    }
};

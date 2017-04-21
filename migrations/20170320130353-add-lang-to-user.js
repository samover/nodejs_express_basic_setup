/**
 * 20170320130353-add-lang-to-user.js
 * migrations
 *
 * Created by samover on 20/03/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Users',
            'lang',
            {
                type: Sequelize.ENUM('en', 'nl', 'fr'),
            });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Users_lang" CASCADE')
            .then(() => {
                return queryInterface.sequelize.query(
                    'ALTER TABLE "public"."Users" DROP COLUMN IF EXISTS "lang";'); });
    },
};

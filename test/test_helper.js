/**
 * test_helper.js
 * test
 *
 * Created by samover on 23/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

require('dotenv').config({ path: `${__dirname}/../.env.test` });

global.diContainer = require('../src/config/diContainer.config');
const Database = require('../src/models/db');

const sequelize = new Database().getSequelize();

/** = CHAI CONFIG ================================================================================ */
const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const chaiThings = require('chai-things');
const sinonChai = require('sinon-chai');
const dateTime = require('chai-datetime');
const dirtyChai = require('dirty-chai');

chai.config.includeStack = true;
chai.config.showDiff = true;
chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(dirtyChai);
chai.use(dateTime);
chai.use(chaiThings);

/** = GLOBAL REQUIRES ============================================================================ */
global.dbCleaner = () => { return sequelize.sync({ force: true }); };
global.expect = chai.expect;
global.sinon = sinon;
global.nock = require('nock');
global.request = require('supertest-as-promised');
global.joi = require('joi');
global.faker = require('faker');
global.mocker = require('./helpers/mocker');
global.lifetime = require('awilix').Lifetime;

nock.disableNetConnect();
nock.enableNetConnect(/127.0.0.1|localhost|app/);

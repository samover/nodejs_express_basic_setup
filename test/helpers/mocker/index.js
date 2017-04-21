/**
 * index.js
 * test/helpers/mocker
 *
 * Created by samover on 02/01/2017.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';

const _ = require('lodash');

class Mocker {
    registerContainer(key, value) {
        const registerObject = {};
        registerObject[key] = value;

        if (value instanceof Function) diContainer.registerClass(registerObject);
        else diContainer.registerValue(registerObject);
    }

    register(object) {
        const keys = Object.keys(object);
        this.mementoObject = {};
        _.each(keys, (key) => {
            this.mementoObject[key] = diContainer.resolve(key);
            this.registerContainer(key, object[key]);
        });
    }

    deRegister() {
        const keys = Object.keys(this.mementoObject);
        _.each(keys, key => this.registerContainer(key, this.mementoObject[key]));
    }
}

module.exports = new Mocker();

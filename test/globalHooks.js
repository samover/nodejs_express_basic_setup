/**
 * globalHooks.js
 * test
 *
 * Created by samover on 23/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

before(() => {
    return dbCleaner();
});

after(() => {
    return dbCleaner();
});

/**
 * index.js
 * test/helpers/factory
 *
 * Created by samover on 25/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

module.exports = {
    User: (options = {}) => {
        const object = {
            id: faker.random.number({ min: 1, max: 999999999 }),
            nickName: faker.name.firstName(),
            sessionId: faker.random.number({ min: 10000000000, max: 99999999999 }).toString(),
        };

        return Object.assign(object, options);
    },
    UnleashedUser: (options = {}) => {
        const object = {
            id: faker.random.number({ min: 1, max: 999999999 }),
            accessToken: faker.random.number({ min: 100000000, max: 999999999 }).toString(),
            unleashedId: faker.random.number({ min: 1000, max: 9999 }),
            phoneNumber: faker.phone.phoneNumber(),
        };

        return Object.assign(object, options);
    },
    FacebookUser: (options = {}) => {
        const object = {
            id: faker.random.number({ min: 1, max: 999999999 }),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            profilePic: faker.image.imageUrl(),
            gender: faker.random.arrayElement(['male', 'female', 'complicated']),
            locale: faker.random.locale(),
            facebookId: faker.random.number({ min: 1000000000, max: 9999999999 }).toString(),
        };

        return Object.assign(object, options);
    },
    FacebookServiceUser: (options = {}) => {
        const object = {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            profile_pic: faker.image.imageUrl(),
            gender: faker.random.arrayElement(['male', 'female', 'complicated']),
            locale: faker.random.locale(),
            facebookId: faker.random.number({ min: 1000000000, max: 9999999999 }).toString(),
        };

        return Object.assign(object, options);
    },
};

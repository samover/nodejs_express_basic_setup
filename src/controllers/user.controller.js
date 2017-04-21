/**
 * user.controller.js
 * src/controllers
 *
 * Created by samover on 21/04/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const router = require('express').Router();
const co = require('co');

/**
 * /users route
 *
 * @class UserController
 */
module.exports = class UserController {
    constructor() {
        this.logger = diContainer.cradle.logger;
    }

    /**
     * Create the routes.
     *
     * @class UserController
     * @method create
     * @static
     */
    static create() {
        router.get('/', (req, res, next) => { return new UserController().get(req, res, next); });
        router.post('/', (req, res, next) => { new UserController().post(req, res, next); });

        return router;
    }

    /**
     * Returns all users
     *
     * @class UserController
     * @method get
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    get(req, res) {
        this.logger.debug('GET /users', req.query);

        return res.status(200);
    }

    /**
     * Creates a new user
     *
     * @class UserController
     * @method get
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    post(req, res, next) {
        this.logger.debug('POST /users', req.body);

        return res.status(200);
    }
};

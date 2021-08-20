const userService = require('../service/user-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()));
            }
            const { email, password, firstName, lastName } = req.body;
            const userData = await userService.registration(email, password, firstName, lastName);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true}); // httpOnly ->to forbid to get access to cookie from browser
            return res.json(userData); // todo: return user Id, not tokens + userDto (email+firstName+lastName)
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(['123', '456']);
        } catch (e) {
            next(e);
        }
    }
};

module.exports = new UserController();

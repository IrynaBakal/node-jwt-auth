const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
    async registration(email, password, firstName, lastName) {
        const candidate = await UserModel.findOne({ email });
        if (candidate) {
            throw ApiError.BadRequest(`User with email ${email} already exists`);
        }
        const hashedPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({ email, password: hashedPassword, firstName, lastName });
        const userDto = new UserDto(user); // id, email, firstName, lastName
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

};

module.exports = new UserService();

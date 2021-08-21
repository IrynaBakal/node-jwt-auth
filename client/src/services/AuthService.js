import $api from "../http";

export default class AuthService {
    static async login (email, password) {
        return $api.post('/login', { email, password });
    }

    static async registration (email, password, firstName, lastName) {
        return $api.post('/registration', { email, password, firstName, lastName });
    }

    static async logout () {
        return $api.post('/logout');
    }
};

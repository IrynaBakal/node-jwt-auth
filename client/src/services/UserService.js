import $api from '../http/index';

export default class UserService {
    static async fetchUsers (email, password) {
        return $api.get('/users');
    }

    static async fetchUser (email, password, userId) {
        return $api.get('/user', { userId });
    }
};

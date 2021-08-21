import $api from '../http/index';

export default class USerService {
    static async fetchUsers (email, password) {
        return $api.get('/users');
    }

    static async fetchUser (email, password) {
        return $api.get('/user');
    }
};

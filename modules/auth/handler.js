import AuthService from "./service.js";

export default class AuthHandler {
    constructor() {
        this.service = new AuthService()
    }

    register(data) {
        try {
            return this.service.register(data)
        } catch (e) {
            return {message: e.message}
        }
    }

    login(data) {
        try {
            return this.service.login(data)
        } catch (e) {
            return {message: e}
        }
    }
}
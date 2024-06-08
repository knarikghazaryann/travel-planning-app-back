import AuthService from "./service.js";

export default class AuthHandler {
    constructor() {
        this.service = new AuthService()
    }

    register(data) {
        return this.service.register(data)
    }

    login(data) {
        return this.service.login(data)
    }
}
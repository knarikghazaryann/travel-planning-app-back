import UserService from "./service.js";

export default class UserHandler {
    constructor() {
        this.service = new UserService()
    }

    getAll() {
        try {
            return this.service.getAll()
        } catch (e) {
            return {message: e.message}
        }
    }

    create(data) {
        try {
            return this.service.create(data)
        } catch (e) {
            return {message: e.message}
        }
    }

    update(data) {
        try {
            return this.service.update(data)
        } catch (e) {
            return {message: e.message}
        }
    }

    delete(id) {
        try {
            return this.service.delete(id)
        } catch (e) {
            return {message: e.message}
        }
    }

    findOne(email) {
        try {
            return this.service.findOne(email)
        } catch (e) {
            return {message: e.message}
        }
    }

}
import RouteService from "./service.js";

export default class RouteHandler {
    constructor() {
        this.service = new RouteService()
    }

    getAll() {
        return this.service.getAll()
    }

    findOne(id) {
        return this.service.findOne(id)
    }

    create(data) {
        return this.service.create(data)
    }

    update(data) {
        return this.service.update(data)
    }

    delete(id) {
        return this.service.delete(id)
    }
}
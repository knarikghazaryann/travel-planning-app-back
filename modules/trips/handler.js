import TripService from "./service.js";

export default class TripHandler {
    constructor() {
        this.service = new TripService()
    }

    getAll(id) {
        return this.service.getAll(id)
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
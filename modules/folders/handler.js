import FolderService from "./service.js";

export default class FolderHandler {
    constructor() {
        this.service = new FolderService()
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

    getAll(tripId) {
        return this.service.getAll(tripId)
    }

    findOne(id) {
        return this.service.findOne(id)
    }

}
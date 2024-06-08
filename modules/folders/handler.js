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

    getAll() {
        return this.service.getAll()
    }

    findOne(id) {
        return this.service.findOne(id)
    }

}
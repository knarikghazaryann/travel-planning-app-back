import FileService from "./service.js";

export default class FileHandler {
    constructor() {
        this.service = new FileService()
    }

    create(data) {
        return this.service.create(data)
    }

    delete(id) {
        return this.service.delete(id)
    }

    getAll(folderId) {
        return this.service.getAll(folderId)
    }
}
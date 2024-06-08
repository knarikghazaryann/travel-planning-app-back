import PrismaSingleton from '../../prisma/index.js'
export default class FolderService {
    constructor() {
        this.folders = PrismaSingleton.folders
    }

    getAll() {
        return this.folders.findMany()
    }

    findOne(id) {
        return this.folders.findUnique({where: {id}})
    }

    create(data) {
        return this.folders.create({data})
    }

    update({id, input}) {
        return this.folders.update({where: {id}, data: input})
    }

    delete(id) {
        return this.folders.delete({where: {id}})
    }
}
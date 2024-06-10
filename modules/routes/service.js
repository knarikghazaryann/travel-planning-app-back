import PrismaSingleton from '../../prisma/index.js'


export default class RouteService {
    constructor() {
        this.routes = PrismaSingleton.routes
    }

    getAll(tripId) {
        return this.routes.findMany({where: {tripId}, orderBy: {createdAt: 'asc'}})
    }

    findOne(id) {
        return this.routes.findUnique({where: {id}})
    }

    create(data) {
        return this.routes.create({data})
    }

    update(data) {
        const {id, input} = data

        return this.routes.update({where: {id}, data: input})
    }

    delete(id) {
        return this.routes.delete({where: {id}})
    }
}
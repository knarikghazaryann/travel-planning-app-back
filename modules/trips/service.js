import PrismaSingleton from '../../prisma/index.js'

export default class TripService {
    constructor() {
        this.trips = PrismaSingleton.trips
    }

    async create(data) {
        return this.trips.create({data})
    }

    async update(data) {
        const {id, input} = data

        return this.trips.update({where: {id}, data: input})
    }

    async delete(id) {
        return this.trips.delete({where: {id}})
    }

    async findOne(id) {
        return this.trips.findUnique({where: {id}})
    }

    async getAll() {
        return this.trips.findMany()
    }
}
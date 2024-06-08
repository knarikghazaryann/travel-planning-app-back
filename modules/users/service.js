import PrismaSingleton from '../../prisma/index.js'
export default class UserService {
    constructor() {
        this.users = PrismaSingleton.users
    }

     create({data}) {
        return this.users.create({data})
    }

    async update({input, id}) {
        return await this.users.update({where: {id}, data: input})
    }

    async delete(id) {
        return await this.users.delete({where: {id}})
    }

    async findOne(email) {
        return await this.users.findUnique({where: {email}})
    }

    async getAll() {
        return await this.users.findMany()
    }

}
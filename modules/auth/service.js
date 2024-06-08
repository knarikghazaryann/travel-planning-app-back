import UserService from "../users/service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class AuthService {
    constructor() {
        this.usersService = new UserService()
    }

    async register(data) {
        const user = await this.usersService.findOne(data.email)
        if(user) throw new Error('User with that email already exists.')

        const hashedPassword = await bcrypt.hash(data.password, 5)
        const newUser = await this.usersService.create({data: {...data, password: hashedPassword}})

        const token = await jwt.sign({userId: newUser.id, email: newUser.email, fullName: newUser.fullName}, process.env.SECRET_KEY, {expiresIn: '1h'})

        return {userId: newUser.id, token, tokenExpiration: 1}
    }

    async login(data) {
        const user = await this.usersService.findOne(data.email)
        if(!user) throw new Error('No such user with that email.')

        const passwordsEqual = await bcrypt.compare(data.password, user.password)

        if(!passwordsEqual) throw new Error('Incorrect password.')

        const token = await jwt.sign({userId: user.id, email: user.email, fullName: user.fullName}, process.env.SECRET_KEY, {expiresIn: '1h'})

        return {userId: user.id, token, tokenExpiration: 1}
    }

}
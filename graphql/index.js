import {graphqlHTTP} from "express-graphql";
import UserHandler from "../modules/users/handler.js";
import schema from "./schema/schema.js";
import Resolver from "./resolver/Resolver.js";
import TripHandler from "../modules/trips/handler.js";
import RouteHandler from "../modules/routes/handler.js";
import FileHandler from "../modules/files/handler.js";
import FolderHandler from "../modules/folders/handler.js";
import AuthHandler from "../modules/auth/handler.js";

const graphqlMiddleware = graphqlHTTP(async (req, res, params) => {
    const userHandler = new UserHandler()
    const tripHandler = new TripHandler()
    const routeHandler = new RouteHandler()
    const fileHandler = new FileHandler()
    const folderHandler = new FolderHandler()
    const authHandler = new AuthHandler()


    const context = {
        userHandler,
        tripHandler,
        routeHandler,
        fileHandler,
        folderHandler,
        authHandler
    }

    return {
        schema,
        rootValue: Resolver,
        context,
        graphiql: true
    }
})

export default graphqlMiddleware
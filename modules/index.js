import UserHandler from "./users/handler.js";
import TripHandler from "./trips/handler.js";
import RouteHandler from "./routes/handler.js";
import FileHandler from "./files/handler.js";
import FolderHandler from "./folders/handler.js";
import AuthHandler from "./auth/handler.js";

const userHandler = new UserHandler()
const tripHandler = new TripHandler()
const routeHandler = new RouteHandler()
const fileHandler = new FileHandler()
const folderHandler = new FolderHandler()
const authHandler = new AuthHandler()


export const context = {
    userHandler,
    tripHandler,
    routeHandler,
    fileHandler,
    folderHandler,
    authHandler
}
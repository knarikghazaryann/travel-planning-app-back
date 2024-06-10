import express from "express"
import dotenv from "dotenv"
dotenv.config()

import cors from "cors";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
import {ApolloServer} from "apollo-server-express";
import Resolver from "./graphql/resolver/Resolver.js";
import schema from "./graphql/schema/schema.js";
import {context} from "./modules/index.js";
import * as path from "path";
import { fileURLToPath } from 'url';

const port = process.env.PORT || 5000

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(graphqlUploadExpress())

const server = new ApolloServer({resolvers: Resolver, typeDefs: schema, context})

await server.start()

server.applyMiddleware({app})


app.listen(port, () => console.log(`Server running on port ${port}`))
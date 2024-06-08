import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import graphqlMiddleware from "./graphql/index.js";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
dotenv.config()

const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(graphqlUploadExpress())


app.use('/graphql', graphqlMiddleware)


app.listen(port, () => console.log(`Server running on port ${port}`))
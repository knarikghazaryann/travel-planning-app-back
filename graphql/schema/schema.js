import {buildSchema} from "graphql";

const schema = buildSchema(`
    scalar Upload
    
    type User {
        id: ID!
        fullName: String!
        email: String!
        trips: [Trip!]!
    }
    
    input UserInput {
        fullName: String!
        email: String!
        password: String!
    }
    
    
    input UserUpdateInput {
        fullName: String
        email: String
    }
    
    type Auth {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }
    
    input AuthInput {
        email: String!
        password: String!
    }
    
    type Trip {
        id: ID!
        title: String!
        description: String!
        startDate: String!
        endDate: String!
        user: User!
        routes: [Route!]!
        folders: [Folder!]!
        files: [File!]!
    }
    
    input TripInput {
        title: String!
        description: String!
        startDate: String!
        endDate: String!
        userId: ID!
    }
    
    
    input TripUpdateInput {
        title: String
        description: String
        startDate: String
        endDate: String
    }
    
    type Route {
        id: ID!
        title: String!
        startLocation: String!
        endLocation: String!
        departureTime: String!
        arrivalTime: String!
        trip: Trip!
    }
    
    input RouteInput {
        title: String!
        startLocation: String!
        endLocation: String!
        departureTime: String!
        arrivalTime: String! 
        tripId: ID!
    }
    
    input RouteUpdateInput {
        title: String
        startLocation: String
        endLocation: String
        departureTime: String
        arrivalTime: String
    }
    
    type File {
        title: String!
        filePath: String!
        mimetype: String!
        encoding: String!
        folderId: ID!
    }
    
    type Folder {
        id: ID!
        title: String!
        parentFolderId: ID
        subfolders: [Folder!]
        trip: Trip!
        files: [File!]!
    }
    
    input FolderInput {
        title: String!
        parentFolderId: ID
        tripId: ID!
    }
    
    input FolderUpdateInput {
        title: String!
    }
    
    
    type Query {
        user(id: ID!): User
        users: [User!]
        
        trip(id: ID!): Trip
        trips: [Trip!]
        
        route(id: ID!): Route
        routes: [Route!]
        
        files: [File!]
        
        folder(id: ID!): Folder
        folders: [Folder!]
    }
    
    type Mutation {
        createUser(input: UserInput!): User
        updateUser(id: ID!, input: UserUpdateInput!): User
        deleteUser(id: ID!): User
        
        register(input: UserInput!): Auth
        login(input: AuthInput!): Auth
        
        createTrip(input: TripInput!): Trip
        updateTrip(id: ID!, input: TripUpdateInput!): Trip
        deleteTrip(id: ID!): Trip 
       
        createRoute(input: RouteInput!): Route
        updateRoute(id: ID!, input: RouteUpdateInput!): Route
        deleteRoute(id: ID!): Route
        
        uploadFile(folderId: ID!, file: Upload!): File
        deleteFile(id: ID!): File
        
        createFolder(input: FolderInput!): Folder
        updateFolder(id: ID!, input: FolderUpdateInput!): Folder
        deleteFolder(id: ID!): Folder
    }

`)

export default schema
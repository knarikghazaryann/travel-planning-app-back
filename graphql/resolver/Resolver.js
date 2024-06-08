const Resolver = {
    users: (args, context) => {
        return context.userHandler.getAll()
    },
    user: ({email}, context) => {
        return context.userHandler.findOne(email)
    },
    createUser: ({input}, context) => {
        return context.userHandler.create(input)
    },
    updateUser: ({id, input}, context) => {
        return context.userHandler.update({id, input})
    },
    deleteUser: ({id}, context) => {
        return context.userHandler.delete(id)
    },

    trips: (args, context) => {
        return context.tripHandler.getAll()
    },
    trip: ({id}, context) => {
        return context.tripHandler.findOne(id)
    },
    createTrip: ({input}, context) =>{
        return context.tripHandler.create(input)
    },
    updateTrip: ({id, input}, context) => {
        return context.tripHandler.update({id, input})
    },
    deleteTrip: ({id}, context) => {
        return context.tripHandler.delete(id)
    },

    routes: (args, context) => {
        return context.routeHandler.getAll()
    },
    route: ({id}, context) => {
        return context.tripHandler.findOne(id)
    },
    createRoute: ({input}, context) => {
        return context.routeHandler.create(input)
    },
    updateRoute: ({id, input}, context) => {
        return context.routeHandler.update({id, input})
    },
    deleteRoute: ({id}, context) => {
        return context.routeHandler.delete(id)
    },

    files: (args, context) => {
        return context.fileHandler.getAll()
    },
    uploadFile: ({file, folderId}, context) => {
       return context.fileHandler.create({file, folderId})
    },

    folders: (args, context) => {
        return context.folderHandler.getAll()
    },
    folder: ({id}, context) => {
      return context.folderHandler.findOne(id)
    },
    createFolder: ({input}, context) => {
        return context.folderHandler.create(input)
    },
    updateFolder: ({id, input}, context) => {
        return context.folderHandler.update({id, input})
    },
    deleteFolder: ({id}, context) => {
        return context.folderHandler.delete(id)
    },

    register: ({input}, context) => {
        return context.authHandler.register(input)
    },
    login: ({input}, context) => {
        return context.authHandler.login(input)
    }

}

export default Resolver
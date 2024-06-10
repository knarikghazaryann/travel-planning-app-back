const Resolver = {
    Query: {
        users: (parent, args, context) => {
            return context.userHandler.getAll();
        },
        user: (parent, { email }, context) => {
            return context.userHandler.findOne(email);
        },
        trips: (parent, {userId}, context) => {
            return context.tripHandler.getAll(userId);
        },
        trip: (parent, { id }, context) => {
            return context.tripHandler.findOne(id);
        },
        routes: (parent, {tripId}, context) => {
            return context.routeHandler.getAll(tripId);
        },
        route: (parent, { id }, context) => {
            return context.routeHandler.findOne(id);
        },
        files: (parent, {folderId}, context) => {
            return context.fileHandler.getAll(folderId);
        },
        folders: (parent, {tripId}, context) => {
            return context.folderHandler.getAll(tripId);
        },
    },
    Mutation: {
        createUser: (parent, { input }, context) => {
            return context.userHandler.create(input);
        },
        updateUser: (parent, { id, input }, context) => {
            return context.userHandler.update({ id, input });
        },
        deleteUser: (parent, { id }, context) => {
            return context.userHandler.delete(id);
        },
        createTrip: (parent, { input }, context) => {
            return context.tripHandler.create(input);
        },
        updateTrip: (parent, { id, input }, context) => {
            return context.tripHandler.update({ id, input });
        },
        deleteTrip: (parent, { id }, context) => {
            return context.tripHandler.delete(id);
        },
        createRoute: (parent, { input }, context) => {
            return context.routeHandler.create(input);
        },
        updateRoute: (parent, { id, input }, context) => {
            return context.routeHandler.update({ id, input });
        },
        deleteRoute: (parent, { id }, context) => {
            return context.routeHandler.delete(id);
        },
        uploadFile: (parent, { file, folderId }, context) => {
            return context.fileHandler.create({ file, folderId });
        },
        deleteFile: (parent, { id }, context) => {
            return context.fileHandler.delete(id);
        },
        createFolder: (parent, { input }, context) => {
            return context.folderHandler.create(input);
        },
        updateFolder: (parent, { id, input }, context) => {
            return context.folderHandler.update({ id, input });
        },
        deleteFolder: (parent, { id }, context) => {
            return context.folderHandler.delete(id);
        },
        register: (parent, { input }, context) => {
            return context.authHandler.register(input);
        },
        login: (parent, { input }, context) => {
            return context.authHandler.login(input);
        },
    },
};

export default Resolver;

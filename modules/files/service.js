import PrismaSingleton from '../../prisma/index.js'
import * as fs from "fs";

export default class FileService {
    constructor() {
        this.file = PrismaSingleton.files
    }

    async create({file, folderId}) {
        const {createReadStream, filename, mimetype, encoding} = file.file
        const stream = createReadStream()
        const path = `uploads/${filename}`
        await new Promise((resolve, reject) => {
            const writeStream =  fs.createWriteStream(path)
            writeStream.on('finish', resolve)
            writeStream.on('error', reject)
            stream.pipe(writeStream)
        })

        const updatedFile = {
            filePath: path,
            title: filename,
            mimetype,
            encoding,
            folderId
        }

        return this.file.create({data: updatedFile})
    }

    delete(id) {
        return this.file.delete({where: {id}})
    }

    getAll() {
        return this.file.findMany()
    }
}
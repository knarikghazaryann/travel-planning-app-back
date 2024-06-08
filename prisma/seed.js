import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    const users = await prisma.users.findMany()
}

main()
    .catch(e => console.error(e.message))
    .finally(async () => await prisma.$disconnect())
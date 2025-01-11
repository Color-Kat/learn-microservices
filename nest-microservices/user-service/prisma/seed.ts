import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Roles by default
    const roles = ['User', 'Admin', 'Moderator', 'Tester'];

    // Create roles if not exists
    for (const roleName of roles) {
        await prisma.role.upsert({
            where : { name: roleName },
            update: {},
            create: { name: roleName, description: `Role ${roleName}` },
        });
    }

    // Create user with role
    const user = await prisma.user.create({
        data: {
            email   : 'admin@admin.admin',
            username: 'Admin',
            password: '123',
            // roles   : {
            //     connect: [
            //         { name: "User" },
            //         { name: "Admin" }
            //     ]
            // }
        },
    });

    console.log('Seed data created:', { user });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
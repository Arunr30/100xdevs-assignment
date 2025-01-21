import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  const user = await client.user.findFirst({
    where: {
      id: 1
    }
  })
  console.log(user)
}

main();

// findfirst --> read
// delete --> delete,  where:{}
// create --> create
// update --> update, where:{}

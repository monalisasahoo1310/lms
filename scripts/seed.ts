const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photgraphy" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
        { name: "Electronics" },
        { name: "Others" },
      ],
    });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await database.$disconnect();
  }
}

main();

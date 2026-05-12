import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.upsert({
    where: { slug: "growth-launch-manager" },
    update: {
      summary:
        "Coordinate GetDrives' transition into market rollout, visibility, and user growth across Nigeria.",
    },
    create: {
      slug: "growth-launch-manager",
      title: "Growth / Launch Manager",
      summary:
        "Coordinate GetDrives' transition into market rollout, visibility, and user growth across Nigeria.",
    },
  });

  await prisma.role.upsert({
    where: { slug: "social-content-lead" },
    update: {},
    create: {
      slug: "social-content-lead",
      title: "Social & Content Lead",
      summary:
        "Shape brand voice, campaigns, and community across social channels.",
    },
  });

  console.log("Roles seeded.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

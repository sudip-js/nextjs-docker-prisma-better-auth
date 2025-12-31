import prisma from "@/lib/db";

const features = [
  {
    title: "Next.js",
    description:
      "Modern React framework with App Router, Server Actions, and edge-ready performance.",
  },
  {
    title: "Docker",
    description:
      "Containerized development and production environments for consistency and scalability.",
  },
  {
    title: "Prisma",
    description:
      "Type-safe ORM with schema-first design and powerful database tooling.",
  },
  {
    title: "Better Auth",
    description:
      "Secure, extensible authentication with sessions, providers, and best practices.",
  },
];

async function main() {
  console.log("🌱 Seeding features...");

  for (const feature of features) {
    await prisma.feature.upsert({
      where: { title: feature.title },
      update: {},
      create: feature,
    });
  }

  console.log("✅ Features seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

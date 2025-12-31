# Next.js Production Auth Stack

A clean, scalable, and secure starter template built with **Next.js**, **Docker**, **Prisma**, and **Better Auth**. Designed for real-world production applications with a focus on type safety and developer experience.

**🌐 Live Demo:** [nextjs-docker-prisma-better-auth.vercel.app](https://nextjs-docker-prisma-better-auth.vercel.app/)

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Authentication:** [Better Auth](https://www.better-auth.com/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Deployment:** [Docker](https://www.docker.com/) & [Vercel](https://vercel.com/)
- **Theme:** Dark/Light mode support via `next-themes`

## ✨ Key Features

- **Production-Ready Auth:** Complete authentication flow powered by Better Auth.
- **Dynamic Content:** Home page features are fetched server-side from your database using Prisma.
- **Modern UI:** Responsive design with accessible components from shadcn/ui.
- **Dockerized:** Easily containerize your application for consistent deployment environments.
- **Safe Database Access:** Implemented with `getFeaturesSafe()` patterns to handle database connection issues gracefully.

## 🛠️ Getting Started

### 1. Prerequisites

- Node.js 18+
- Docker (optional, for local DB)
- PostgreSQL (or your preferred DB supported by Prisma)

### 2. Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install
```

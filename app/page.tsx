import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

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

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <span className="font-semibold tracking-tight">Next.js Stack</span>
        <ThemeToggle />
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Badge variant="outline" className="mb-4">
          Production Ready Stack
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Next.js Authentication Platform
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
          A clean, scalable, and secure starter built with Next.js, Docker,
          Prisma, and Better Auth—designed for real-world production apps.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Documentation
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        Built with shadcn/ui • Accessible • Production-grade
      </footer>
    </main>
  );
};

export default HomePage;

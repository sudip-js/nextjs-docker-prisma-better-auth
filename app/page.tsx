const features = [
  {
    title: "Next.js",
    description:
      "Production-ready React framework with App Router, Server Actions, and optimized performance.",
    icon: "⚡",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Docker",
    description:
      "Containerized environment for consistent development, testing, and production deployment.",
    icon: "🐳",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Prisma",
    description:
      "Type-safe ORM with schema-first approach and seamless database migrations.",
    icon: "🧩",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Better Auth",
    description:
      "Secure authentication with modern flows, session handling, and extensible providers.",
    icon: "🔐",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Production-Grade{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Next.js Stack
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
          A modern, scalable boilerplate powered by Next.js, Docker, Prisma, and
          secure authentication—built for real-world applications.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-500 transition">
            Get Started
          </button>
          <button className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold hover:bg-slate-800 transition">
            View Docs
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur transition hover:border-slate-600"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-br ${feature.gradient}`}
              />

              <div className="relative z-10">
                <div className="mb-4 text-4xl">{feature.icon}</div>

                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        Built for production • Secure • Scalable • Developer-friendly
      </footer>
    </main>
  );
};

export default HomePage;

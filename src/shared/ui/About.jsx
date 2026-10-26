
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: "▦", value: "20K+", label: "Products" },
    { icon: "♙", value: "50K+", label: "Happy Customers" },
    { icon: "☆", value: "4.9", label: "Average Rating" },
    { icon: "↗", value: "99%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      number: "01",
      title: "Quality First",
      description:
        "Every product should deliver real value. We focus on bringing together quality products that meet your everyday needs.",
    },
    {
      number: "02",
      title: "Shopping Made Simple",
      description:
        "Finding what you need shouldn't be complicated. We believe in a clean, intuitive shopping experience without unnecessary friction.",
    },
    {
      number: "03",
      title: "Value That Matters",
      description:
        "Great shopping means getting more for your money. Our goal is to make discovering and buying products straightforward.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0b] px-5 pb-20 text-white sm:px-8">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl pt-16 sm:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ccff00]/[0.06] blur-[110px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#ccff00] text-4xl font-bold text-black shadow-[0_0_50px_rgba(204,255,0,0.12)]">
            ↯
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#ccff00]">
            More than just shopping
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            About <span className="text-[#ccff00]">SkyMart</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
            A next-generation shopping experience built around what matters
            most: great products, fair prices, and a simpler way to shop.
            Discover a world of possibilities, all in one place.
          </p>

          <button
            onClick={() => navigate("/home/shop")}
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#ccff00] px-7 py-3.5 text-sm font-semibold text-black transition duration-200 hover:bg-[#b9e800] hover:shadow-[0_0_30px_rgba(204,255,0,0.12)] active:scale-[0.98]"
          >
            Browse Products
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-2xl border border-white/70 bg-[#111111] px-3 py-6 text-center transition duration-300 hover:border-[#ccff00]/60 hover:bg-[#141414] sm:py-7"
          >
            <span className="text-2xl text-[#ccff00]">{stat.icon}</span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              {stat.value}
            </h2>

            <p className="mt-2 text-xs text-neutral-500 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Our Story */}
      <section className="mx-auto mt-16 max-w-5xl sm:mt-20">
        <div className="rounded-[24px] border border-white/70 bg-[#111111] p-6 sm:p-9 md:p-11">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-[#ccff00]" />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our Story
            </h2>
          </div>

          <div className="mt-6 space-y-5 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
            <p>
              Shopping should feel effortless. It should be easy to find
              something you need, discover something you love, and make a
              purchase without the usual hassle.
            </p>

            <p>
              That idea is at the heart of SkyMart. We envision an online
              marketplace where discovering products feels natural, the
              experience stays simple, and every interaction puts the customer
              first.
            </p>

            <p>
              From everyday essentials to the latest electronics, fashion,
              accessories, and more, our goal is to bring variety and
              convenience together in one seamless destination.
            </p>

            <p>
              We're building toward a better kind of e-commerce: one that
              values <span className="text-white">simplicity</span>,{" "}
              <span className="text-white">transparency</span>, and{" "}
              <span className="text-[#ccff00]">the customer experience</span>{" "}
              at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="mx-auto mt-16 max-w-5xl sm:mt-20">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ccff00]">
            What drives us
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Shopping with a purpose.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500">
            The principles behind every decision we make and every experience
            we want to create.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="group rounded-2xl border border-white/70 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
            >
              <span className="text-sm font-semibold tracking-widest text-[#ccff00]">
                {value.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-500">
                {value.description}
              </p>

              <div className="mt-6 h-px w-10 bg-[#ccff00]/60 transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto mt-16 max-w-5xl sm:mt-20">
        <div className="relative overflow-hidden rounded-[24px] border border-[#ccff00]/20 bg-[#111111] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-[#ccff00]/[0.07] blur-[80px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ccff00]">
              Your next discovery awaits
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Find something you'll love.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-neutral-500">
              Explore the collection and discover products that fit your
              everyday life.
            </p>

            <button
              onClick={() => navigate("/home/shop")}
              className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-[#ccff00] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#b9e800] active:scale-[0.98]"
            >
              Browse Products
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-16 max-w-5xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} SkyMart. A better way to shop.
        </p>
      </footer>
    </main>
  );
};

export default About;

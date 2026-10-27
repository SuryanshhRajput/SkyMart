
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useProductApi } from "../../features/products/hooks/productHook";
import ProductCard from "../../features/products/ui/components/ProductCard";

const HomePage = () => {
  const { user } = useSelector((store) => store.auth);
  const firstName = user?.name?.split(" ")[0];
  const navigate = useNavigate();
  const { data, isPending } = useProductApi();
  const products = Array.isArray(data) ? data : [];
  const allCategories = [
    ...new Map(
      products
        .filter((product) => product.category)
        .map((product) => [product.category, product]),
    ).values(),
  ];
  const categories = allCategories.slice(0, 6);
  const featuredProducts = products.slice(0, 4);
  const topRatedProducts = [...products]
    .sort((first, second) => (second.rating || 0) - (first.rating || 0))
    .slice(0, 4);
  const overviewItems = [
    {
      label: "Products to discover",
      value: isPending ? "…" : products.length,
      detail: "A handpicked range for every day",
      icon: "✦",
    },
    {
      label: "Categories",
      value: isPending ? "…" : allCategories.length,
      detail: "Find something that fits your style",
      icon: "▦",
    },
    {
      label: "Delivery",
      value: "FREE",
      detail: "On orders above ₹299",
      icon: "↗",
    },
    {
      label: "Shopping",
      value: "Easy",
      detail: "Browse, choose, and enjoy",
      icon: "♡",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <main className="mx-auto max-w-[1400px] px-5 pb-16 pt-7 sm:px-8 lg:px-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[26px] border border-white/70 bg-[#101010]">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(204,255,0,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.055) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="pointer-events-none absolute right-24 top-0 h-64 w-64 rounded-full bg-[#ccff00]/[0.06] blur-[90px]" />

          <div className="relative grid min-h-[350px] items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[380px] lg:grid-cols-[1fr_220px] lg:px-12 lg:py-14">
            {/* Hero content */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.17em] text-[#ccff00] sm:text-sm">
                YOUR NEXT DISCOVERY
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Welcome back
                <br />
                <span className="text-[#ccff00]">{firstName},</span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
                Explore a world of possibilities with a shopping experience
                designed around you.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/home/shop")}
                  type="button"
                  className="rounded-xl bg-[#ccff00] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#b9e800]"
                >
                  Shop Now <span className="ml-2">→</span>
                </button>

                <button
                  onClick={() => navigate("/home/shop")}
                  type="button"
                  className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-medium text-neutral-300 transition hover:border-[#ccff00]/50 hover:text-white"
                >
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Hero highlights */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-[#ccff00]/30 bg-[#ccff00]/10 px-4 py-6 text-center">
                <p className="text-3xl font-bold text-[#ccff00]">20+</p>

                <p className="mt-2 text-xs leading-5 text-neutral-400">
                  Available Products
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center">
                <p className="text-2xl font-semibold text-white">FREE</p>

                <p className="mt-2 text-xs leading-5 text-neutral-400">
                  Delivery above ₹299
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Store highlights */}
        <section className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {overviewItems.map((item) => (
            <div
              key={item.label}
              className="min-h-[120px] rounded-[22px] border border-white/10 bg-[#111111] p-5 transition hover:border-[#ccff00]/30 sm:min-h-[128px]"
            >
              <div className="flex items-start justify-between">
                <p className="text-sm text-neutral-400">{item.label}</p>
                <span className="text-lg text-[#ccff00]" aria-hidden="true">
                  {item.icon}
                </span>
              </div>
              <p className="mt-3 text-2xl font-semibold text-white">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{item.detail}</p>
            </div>
          ))}
        </section>

        {/* Categories */}
        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Shop by Category
            </h2>

            <button
              onClick={() => navigate("/home/shop")}
              type="button"
              className="text-sm font-medium text-[#ccff00] transition hover:text-white"
            >
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {isPending
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="min-h-[140px] animate-pulse rounded-2xl border border-white/10 bg-[#111111] sm:min-h-[150px]"
                  />
                ))
              : categories.map((product) => (
                  <button
                    key={product.category}
                    type="button"
                    onClick={() => navigate("/home/shop")}
                    className="group relative min-h-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[#151515] text-left transition hover:border-[#ccff00]/50 sm:min-h-[150px]"
                  >
                    {(product.thumbnail || product.images?.[0]) && (
                      <img
                        src={product.thumbnail || product.images[0]}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-50"
                      />
                    )}
                    <span className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <span className="relative flex h-full min-h-[140px] flex-col justify-end p-4 sm:min-h-[150px]">
                      <span className="text-sm font-semibold capitalize text-white">
                        {product.category.replaceAll("-", " ")}
                      </span>
                      <span className="mt-1 text-xs text-neutral-300">
                        Explore collection →
                      </span>
                    </span>
                  </button>
                ))}
          </div>
        </section>

        {/* Product collections */}
        <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[
            { title: "Featured Finds", items: featuredProducts },
            { title: "Top Rated", items: topRatedProducts },
          ].map((collection) => (
            <div
              key={collection.title}
              className="rounded-[24px] border border-white/10 bg-[#111111] p-5 sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">{collection.title}</h2>
                <button
                  onClick={() => navigate("/home/shop")}
                  type="button"
                  className="text-sm font-medium text-[#ccff00] transition hover:text-white"
                >
                  Shop all →
                </button>
              </div>

              {isPending ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-[300px] animate-pulse rounded-[22px] border border-white/10 bg-[#151515]"
                    />
                  ))}
                </div>
              ) : collection.items.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {collection.items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="rounded-2xl border border-white/10 bg-[#151515] px-4 py-8 text-center text-sm text-neutral-500">
                  No products available right now.
                </p>
              )}
            </div>
          ))}
        </section>

        {/* Payment methods */}
        <section className="mt-12 rounded-[24px] border border-white/10 bg-[#111111] px-6 py-8 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Payment Methods</h2>

              <p className="mt-2 text-sm text-neutral-500">
                Convenient and secure payment options.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-12 min-w-16 items-center justify-center rounded-xl border border-white/10 bg-[#181818] px-4 text-sm font-bold italic text-white">
                VISA
              </div>

              <div
                aria-label="Mastercard"
                className="flex h-12 min-w-16 items-center justify-center rounded-xl border border-white/10 bg-[#181818] px-4"
              >
                <div className="flex -space-x-2">
                  <span className="h-5 w-5 rounded-full bg-red-500/90" />
                  <span className="h-5 w-5 rounded-full bg-orange-400/90" />
                </div>
              </div>

              <div className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-[#181818] px-4 text-sm font-bold text-blue-400">
                PayPal
              </div>

              <div className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-[#181818] px-4 text-sm font-semibold text-[#ccff00]">
                UPI
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-neutral-600">
            © {new Date().getFullYear()} SkyMart. All rights reserved. Built by{" "}
            <span className="font-medium text-[#ccff00]">
              Suryansh Singh
            </span>
            .
          </p>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;

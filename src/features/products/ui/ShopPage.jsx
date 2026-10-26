import { useProductApi } from "../hooks/productHook";
import ProductCard from "./components/ProductCard";

const ShopPage = () => {
  let { data, isPending } = useProductApi();

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <main className="mx-auto max-w-[1400px] px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        {/* Page heading */}
        <section>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ccff00]">
                THE COLLECTION
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                All Products
              </h1>

              <p className="mt-2 text-sm text-neutral-500">
                Find something worth bringing home.
              </p>
            </div>

            <div className="hidden rounded-xl border border-white/10 bg-[#111111] px-4 py-3 sm:block">
              <p className="text-xs text-neutral-500">Explore the collection</p>
              <p className="mt-1 text-sm font-medium text-[#ccff00]">
                Your next favourite find →
              </p>
            </div>
          </div>
        </section>

        {/* Search and filters */}
        <section className="mt-8 rounded-2xl border border-white/70 bg-[#111111] p-3 sm:p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            {/* Search */}
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#202020] px-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5 shrink-0 text-neutral-500"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                type="text"
                placeholder="Search products..."
                aria-label="Search products"
                className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
              />

              <span className="hidden rounded-md border border-white/10 px-2 py-1 text-xs text-neutral-600 sm:block">
                Search
              </span>
            </div>

            {/* Category filter UI */}
            <button
              type="button"
              className="flex h-12 items-center justify-between gap-8 rounded-xl border border-white/10 bg-[#202020] px-4 text-sm text-neutral-300 transition hover:border-[#ccff00]/40"
            >
              <span>All Categories</span>
              <span className="text-neutral-500">⌄</span>
            </button>

            {/* Sort UI */}
            <button
              type="button"
              className="flex h-12 items-center justify-between gap-8 rounded-xl border border-white/10 bg-[#202020] px-4 text-sm text-neutral-300 transition hover:border-[#ccff00]/40"
            >
              <span>Featured</span>
              <span className="text-neutral-500">⌄</span>
            </button>
          </div>
        </section>

        {/* Collection toolbar */}
        <section className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">Explore Collection</h2>
            <p className="mt-1 text-xs text-neutral-500">
              Products will appear here.
            </p>
          </div>

          <button
            type="button"
            aria-label="Grid view"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ccff00]/30 bg-[#ccff00]/10 text-[#ccff00]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-5 w-5"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>
        </section>

        {/* Empty product grid */}
        <section className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {isPending
            ? "loading..."
            : data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-neutral-600">
            © {new Date().getFullYear()} SkyMart. All rights reserved. Built by{" "}
            <span className="font-medium text-[#ccff00]">Suryansh Singh</span>.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default ShopPage;

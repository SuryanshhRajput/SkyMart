import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { useState } from "react";

import CartDrawer from "../../features/cart/ui/CartDrawer";
import { useAuth } from "../../features/auth/hooks/useAuthHook";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { user } = useSelector((store) => store.auth);
  const totalItems = useSelector((store) =>
    store.cart.products.reduce((total, product) => total + product.quantity, 0),
  );

  let { handleLogout } = useAuth();

  const navClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive ? "text-[#ccff00]" : "text-neutral-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#0b0b0b]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link to="/home" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ccff00] text-xl font-bold text-black">
            ↯
          </span>

          <span className="text-xl font-bold tracking-tight text-white">
            Sky<span className="text-[#ccff00]">Mart</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <NavLink to="/home" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/home/shop" className={navClass}>
            Shop
          </NavLink>

          <NavLink to="/home/about" className={navClass}>
            About
          </NavLink>
        </div>

        {/* Account and actions */}
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#191919] px-2.5 py-2 sm:px-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ccff00] text-xs font-bold text-black">
              {user?.name?.trim().charAt(0).toUpperCase() || "U"}
            </span>

            <span className="hidden max-w-[110px] truncate text-sm text-neutral-300 sm:block">
              {user.name}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open shopping cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neutral-300 transition hover:border-[#ccff00]/50 hover:text-[#ccff00]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-5 w-5"
            >
              <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute right-0 top-0 flex h-5 min-w-5 -translate-y-1/3 translate-x-1/3 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[10px] font-bold text-black">
                {totalItems}
              </span>
            )}
          </button>

          <button
          onClick={handleLogout}
            type="button"
            aria-label="Account"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neutral-300 transition hover:border-[#ccff00]/50 hover:text-[#ccff00] sm:flex"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-5 w-5"
            >
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
              <path d="M12 3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-6" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div className="flex justify-center gap-9 border-t border-white/5 py-3 md:hidden">
        <NavLink to="/home" end className={navClass}>
          Home
        </NavLink>

        <NavLink to="/home/shop" className={navClass}>
          Shop
        </NavLink>

        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;

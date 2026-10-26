const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-md flex-col overflow-hidden border-l border-white/10 bg-[#101010] text-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <p className="mt-1 text-xs text-neutral-500">Your shopping bag</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl text-neutral-400 transition hover:border-[#ccff00]/50 hover:text-[#ccff00]"
          >
            ×
          </button>
        </div>

        {/* Cart body */}
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#ccff00]/20 bg-[#ccff00]/[0.06]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ccff00"
              strokeWidth="1.3"
              className="h-11 w-11"
            >
              <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </div>

          <h3 className="mt-7 text-lg font-semibold">Your cart is empty</h3>

          <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
            Looks like you haven't added anything to your cart yet. Explore our
            collection and find something you love.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-6 rounded-xl bg-[#ccff00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#b9e800]"
          >
            Continue Shopping →
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-400">Subtotal</span>

            <span className="text-lg font-semibold">₹0.00</span>
          </div>

          <button
            type="button"
            disabled
            className="mt-5 w-full cursor-not-allowed rounded-xl bg-white/10 py-3.5 text-sm font-semibold text-neutral-500"
          >
            Proceed to Checkout
          </button>

          <p className="mt-3 text-center text-xs text-neutral-600">
            Shipping and taxes calculated at checkout.
          </p>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;

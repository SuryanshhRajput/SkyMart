
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct } from "../../../cart/state/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);
  const { isAdding } = useSelector((store) => store.cart);
  const [wasAdded, setWasAdded] = useState(false);
  const [addError, setAddError] = useState("");

  if (!product) return null;

  const image = product.thumbnail || product.images?.[0] || product.image;
  const name = product.title || product.name || "Untitled product";

  const handleAddToCart = async () => {
    setWasAdded(false);
    setAddError("");

    try {
      await dispatch(
        addCartProduct({
          product,
          userId: Number.isInteger(user?.id) ? user.id : 1,
        }),
      ).unwrap();
      setWasAdded(true);
    } catch (error) {
      setAddError(
        typeof error === "string"
          ? error
          : "Unable to add this product. Please try again.",
      );
    }
  };

  return (
    <article className="group overflow-hidden rounded-[22px] border border-white/10 bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
      {/* Product image */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-white p-5">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full rounded-xl bg-neutral-100" />
        )}

        {/* Category badge */}
        {product.category && (
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {product.category}
          </span>
        )}
      </div>

      {/* Product details */}
      <div className="p-4">
        <p className="text-xs text-neutral-500">
          {product.category}
        </p>

        <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-medium leading-5 text-neutral-200 transition group-hover:text-white">
          {name}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2 text-xs">
          <span className="text-amber-400">
            {"★".repeat(Math.max(0, Math.min(5, Math.round(product.rating || 0))))}
            {"☆".repeat(5 - Math.max(0, Math.min(5, Math.round(product.rating || 0))))}
          </span>

          {product.rating != null && (
            <span className="text-neutral-500">
              {product.rating}
            </span>
          )}
        </div>

        <div className="my-3 border-t border-white/10" />

        {/* Price and add button */}
        <div className="flex items-center justify-between gap-2">
          <p className="text-lg font-semibold text-[#ccff00]">
            {product.price != null
              ? `₹${Number(product.price).toFixed(2)}`
              : "—"}
          </p>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdding}
            className="flex items-center gap-2 rounded-xl bg-[#ccff00] px-3 py-2.5 text-xs font-semibold text-black transition hover:bg-[#b9e800] disabled:cursor-wait disabled:opacity-60"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            {isAdding ? "Adding…" : wasAdded ? "Added" : "Add"}
          </button>
        </div>
        {addError && (
          <p role="alert" className="mt-2 text-xs text-red-400">
            {addError}
          </p>
        )}
      </div>
    </article>
  );
};

export default ProductCard;

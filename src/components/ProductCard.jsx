import { ShoppingCart, Star } from "lucide-react";

function ProductCard({ product }) {
  const rating = product.rating?.rate ?? 0;

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#12130f] transition duration-300 hover:-translate-y-1 hover:border-[#c4ff00]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
      <div className="relative m-3 flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-[#f7f8f4] p-6">
        <span className="absolute left-3 top-3 max-w-[75%] truncate rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium capitalize text-black/65">
          {product.category}
        </span>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 pt-2">
        <h2 className="line-clamp-2 min-h-12 text-sm font-medium leading-6 text-white/90">
          {product.title}
        </h2>

        <div
          className="mt-3 flex items-center gap-2"
          aria-label={`${rating} out of 5 stars, ${product.rating?.count ?? 0} reviews`}
        >
          <div className="flex items-center gap-0.5 text-[#c4ff00]" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={13}
                className={index < Math.round(rating) ? "fill-current" : "text-white/20"}
              />
            ))}
          </div>
          <span className="text-xs text-white/40">
            {product.rating?.count ?? 0} reviews
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <p className="text-lg font-semibold tracking-tight text-[#c4ff00]">
            ${Number(product.price).toFixed(2)}
          </p>
          <button
            type="button"
            aria-label={`Add ${product.title} to cart`}
            className="flex items-center gap-2 rounded-full bg-[#c4ff00] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#d5ff3b] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#c4ff00]"
          >
            <ShoppingCart size={15} aria-hidden="true" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

import React from 'react';

import {
  Star,
  Zap,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';

const topProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$299',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Smartwatch',
    price: '$399',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: '$129',
    image:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=200&q=80',
  },
];

const trendingProducts = [
  {
    id: 11,
    name: 'Gaming Mouse',
    price: '$89',
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 12,
    name: 'Mechanical Keyboard',
    price: '$149',
    image:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 13,
    name: 'USB-C Hub',
    price: '$59',
    image:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80',
  },
];

function ProductSection({
  title,
  Icon,
  seeAllHref,
  products = [],
  onAddToCart,
}) {
  return (
    <section className="flex-1 min-w-0 rounded-[32px] bg-white p-6 sm:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon size={25} className="fill-[#baff00] text-[#baff00]" />

          <h2 className="text-xl font-semibold text-black sm:text-2xl">
            {title}
          </h2>
        </div>

        <a
          href={seeAllHref}
          className="flex items-center gap-2 text-sm text-[#baff00] sm:text-base"
        >
          See all
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="flex flex-col gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex min-h-[110px] items-center justify-between gap-4 rounded-[24px] border border-[#e1e4eb] px-5 py-5 transition-colors hover:border-[#baff00] sm:px-7"
          >
            <div className="flex min-w-0 items-center gap-5">
              <img
                src={product.image}
                alt={product.name || 'Product'}
                className="h-[54px] w-[54px] object-contain"
              />

              <p className="text-lg font-medium text-[#baff00]">
                {product.price}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onAddToCart?.(product)}
              aria-label="Add to cart"
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-[#f8ffe5] text-[#baff00] transition-colors hover:bg-[#baff00] hover:text-black"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const Topproducts = () => {
  const handleAddToCart = (product) => {
    console.log('Added to cart:', product.name);
  };

  return (
    <div className="space-y-6 bg-[#f4f5f7] p-4 sm:p-6">
      <div className="grid gap-6 xl:grid-cols-2">
        <ProductSection
          title="Top products"
          Icon={Star}
          seeAllHref="#"
          products={topProducts}
          onAddToCart={handleAddToCart}
        />

        <ProductSection
          title="Trending"
          Icon={Zap}
          seeAllHref="#"
          products={trendingProducts}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default Topproducts;
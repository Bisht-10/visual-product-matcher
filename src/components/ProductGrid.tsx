import React from 'react';
import { Product } from '../types/types';

interface Props {
  products: Product[];
}

export const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group overflow-hidden rounded-xl bg-white shadow-lg
            hover:shadow-xl transition-all duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-white font-medium truncate">{product.name}</p>
              <p className="text-white/90">${product.price}</p>
            </div>
          </div>
          {product.similarity && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white
              rounded-full px-2 py-1 text-sm font-medium">
              {Math.round(product.similarity * 100)}% Match
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
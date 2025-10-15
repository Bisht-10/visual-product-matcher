import React from 'react';
import { Product } from '../types/types';

interface Props {
  products: Product[];
}

export const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl 
                     transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-white font-semibold text-base truncate drop-shadow-md">
                {product.name}
              </p>
              <p className="text-gray-200 text-sm">${product.price}</p>
            </div>
          </div>

          {product.similarity && (
            <div className="absolute top-3 right-3 bg-blue-600 text-white rounded-full 
                            px-3 py-1 text-xs font-semibold shadow-md">
              {Math.round(product.similarity * 100)}% Match
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

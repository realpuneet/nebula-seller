import React from 'react'
function ProductCard({ product }) {
  const {title, description, images, price, stock} = product;
  return (
    <div className="relative bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transition hover:scale-[1.02] duration-150 w-full max-w-sm">
      {/* Price in corner */}
      <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-sm font-bold rounded-lg shadow">
        {price.currency} ₹{price.amount}
      </span>
      {/* Product Images */}
      {images && images && (
        <img
          src={images}
          alt={title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="font-semibold text-lg text-gray-900 truncate">{title}</h2>
        <p className="mt-2 text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-auto flex justify-between items-center pt-4">
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {stock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 ml-2 transition">View</button>
        </div>
      </div>
    </div>
  );
}


export default ProductCard
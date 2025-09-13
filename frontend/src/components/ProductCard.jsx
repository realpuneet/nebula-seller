import { useNavigate } from "react-router";
import { useState } from "react";

function ProductCard({ id, title, description, images, price, stock }) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const formatPrice = (price) => {
    if (typeof price === 'object' && price.amount) {
      return `₹${price.amount.toLocaleString('en-IN')}`;
    }
    return `₹${price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0"}`;
  };

  const truncateTitle = (text, maxLength = 50) => {
    if (!text) return "Untitled Product";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const truncateDescription = (text, maxLength = 80) => {
    if (!text) return "No description available";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        {!imageError && images ? (
          <img 
            src={images} 
            alt={title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full shadow-lg border border-gray-200">
            <span className="text-sm font-bold">{formatPrice(price)}</span>
          </div>
        </div>

        {/* Stock Badge */}
        <div className="absolute top-4 left-4">
          <div className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm ${
            stock > 0 
              ? "bg-emerald-500/90 text-white shadow-emerald-500/25" 
              : "bg-red-500/90 text-white shadow-red-500/25"
          } shadow-lg`}>
            {stock > 0 ? `${stock} in stock` : "Out of stock"}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-900 mb-2 leading-tight">
          {truncateTitle(title)}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {truncateDescription(description)}
        </p>

        {/* Action Button */}
        <button
          onClick={() => navigate(`/product-detail/${id}`)}
          disabled={stock === 0}
          className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
            stock > 0
              ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          {stock > 0 ? (
            <span className="flex items-center justify-center gap-2">
              View Details
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          ) : (
            "Currently Unavailable"
          )}
        </button>
      </div>

      {/* Subtle Border Animation */}
      <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 pointer-events-none ${
        isHovered 
          ? 'border-blue-200 shadow-lg' 
          : 'border-transparent'
      }`}></div>
    </div>
  );
}

export default ProductCard;
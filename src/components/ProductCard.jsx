import { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems } = useContext(AppContext);

    return product && (
        <div className="border border-gray-500/20 rounded-md px-3 py-2 bg-white w-full max-w-[220px] sm:max-w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-h-36 object-contain" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm mt-2">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-base truncate">{product.name}</p>
                <div className="flex items-center gap-0.5 mt-1">
                    {Array(5).fill('').map((_, i) => (
                        <img key={i} className="w-3 sm:w-4" src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="star" />
                    ))}
                    <p className="text-xs sm:text-sm">(4)</p>
                </div>
                <div className="flex items-end justify-between mt-3 flex-wrap gap-2">
                    <p className="text-base sm:text-lg font-medium text-primary">
                        {currency}${product.offerPrice}
                        <span className="text-gray-500/60 text-xs sm:text-sm line-through ml-1">${product.price}</span>
                    </p>
                    <div onClick={(e) => e.stopPropagation()} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button
                                className="flex items-center justify-center gap-1 bg-primary-100 border border-primary-300 text-xs sm:text-sm px-2 py-1 rounded text-primary-600 font-medium cursor-pointer"
                                onClick={() => addToCart(product._id)}
                            >
                                <img src={assets.cart_icon} alt="cart_icon" className="w-4 h-4" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded text-sm">
                                <button onClick={() => removeFromCart(product._id)} className="px-1 text-lg">-</button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button onClick={() => addToCart(product._id)} className="px-1 text-lg">+</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

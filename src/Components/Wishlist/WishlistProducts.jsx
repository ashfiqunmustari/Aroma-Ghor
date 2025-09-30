import React from "react";
import WishlistProduct from "./WishlistProduct";
import { FaHeart} from "react-icons/fa";
import { PiHeartBreakFill } from "react-icons/pi";

const WishlistProducts = ({wishlist, handleWishlistButton}) => {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-[#ffc6ca] mt-19 rounded-2xl" style={{ backgroundColor: "rgba(255, 198, 202, 0.3)" }}>
  <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
    My Wishlist <FaHeart size={20} className="text-pink-500" />
  </h2>
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 max-h-[400px]">
        {wishlist.length === 0?(<p className="text-center">Wishlist is empty <PiHeartBreakFill className="inline text-pink-500"/></p>):
        (wishlist.map((perfumes) => (
        <WishlistProduct 
        key={perfumes.id}
        perfumes={perfumes}
        handleWishlistButton={handleWishlistButton}></WishlistProduct>
      )))}
        </div>
    </div>
  );
};

export default WishlistProducts;

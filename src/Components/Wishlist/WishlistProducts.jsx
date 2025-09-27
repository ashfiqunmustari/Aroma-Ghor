import React from "react";
import WishlistProduct from "./WishlistProduct";
import { use } from "react";
import { FaHeart } from "react-icons/fa";

const WishlistProducts = ({ collectionsPromise }) => {
  const wishlist = use(collectionsPromise);
  return (
    <div className="max-w-4xl mx-auto p-5">
  <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
    My Wishlist <FaHeart size={20} className="text-pink-500" />
  </h2>
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 max-h-[400px]">
        {wishlist.map((wishlist) => (
        <WishlistProduct wishlist={wishlist}></WishlistProduct>
      ))}
        </div>
    </div>
  );
};

export default WishlistProducts;

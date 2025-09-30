import React, { Suspense, useState, useEffect } from "react";
import Collections from "./Collections/Collections";
import WishlistProducts from "./Wishlist/WishlistProducts";
import Decants from "./Decants";
const Body = () => {
  const [perfumes, setPerfumes] = useState([]);
  useEffect(() => {
    fetch("Collection.json")
      .then((res) => res.json())
      .then((data) => {
        setPerfumes(data);
      });
  }, []);
  const [wishlist, setWishlist] = useState([]);
  
  const handleWishlistButton = (perfumes, selectedSize) => {
    const newWishlist = wishlist.some((item) =>item.id === perfumes.id && item.size.label === selectedSize.label)
      ? wishlist.filter((item) =>!(item.id === perfumes.id && item.size.label === selectedSize.label))
      : [...wishlist, { ...perfumes, size: selectedSize }];
    setWishlist(newWishlist);
  };
  
  return (
    <div>
      <div className="flex mx-20">
        <div className="w-2/3">
          <h2 className="text-3xl font-bold text-center m-6 mt-0 mb-10">
            Our Collection
          </h2>
          <Collections
            perfumes={perfumes}
            wishlist={wishlist}
            handleWishlistButton={handleWishlistButton}
          ></Collections>
        </div>
        <div className="w-1/3">
          <WishlistProducts wishlist={wishlist}
          handleWishlistButton={handleWishlistButton}></WishlistProducts>
          <Decants></Decants>
        </div>
      </div>
    </div>
  );
};

export default Body;

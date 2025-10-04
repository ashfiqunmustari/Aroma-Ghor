import React from "react";
import Collection from "./Collection";

const Collections = ({perfumes, wishlist, handleWishlistButton, handleCartButton}) => {
  
  return (
    <div>
      <div className="grid grid-cols-2 gap-y-10">
        {perfumes.map((perfume) => (
          <Collection perfume={perfume}
          wishlist={wishlist}
          handleWishlistButton={handleWishlistButton}
          handleCartButton={handleCartButton}></Collection>
        ))}
      </div>
    </div>
  );
};

export default Collections;

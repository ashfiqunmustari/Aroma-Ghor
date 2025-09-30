import React from "react";
import Collection from "./Collection";

const Collections = ({perfumes, wishlist, handleWishlistButton}) => {
  
  return (
    <div>
      <div className="grid grid-cols-2 gap-y-10">
        {perfumes.map((perfume) => (
          <Collection perfume={perfume}
          wishlist={wishlist}
          handleWishlistButton={handleWishlistButton}></Collection>
        ))}
      </div>
    </div>
  );
};

export default Collections;

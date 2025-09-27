import React, { Suspense } from "react";
import Collections from "./Collections/Collections";
import WishlistProducts from "./Wishlist/WishlistProducts";
const Body = () => {
  const collectionsPromise = fetch("Collection.json").then((res) => res.json());
  return (
    <div>
      <div className="flex mx-20">
        <div className="w-2/3">
          <h2 className="text-3xl font-bold text-center m-6">Our Collection</h2>
          <Suspense fallback="Perfume Collection is loading...">
            <Collections collectionsPromise={collectionsPromise}> </Collections>
          </Suspense>
        </div>
        <div className="w-1/3">
          <Suspense fallback="Perfume Collection is loading...">
            <WishlistProducts
              collectionsPromise={collectionsPromise}
            ></WishlistProducts>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Body;

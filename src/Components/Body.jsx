import React, { Suspense, useState, useEffect } from "react";
import Collections from "./Collections/Collections";
import WishlistProducts from "./Wishlist/WishlistProducts";
import Cart from "./Cart/Cart";
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

  {
    /*Wishlist feature-------------------------------------------*/
  }
  const [wishlist, setWishlist] = useState([]);

  const handleWishlistButton = (perfumes, selectedSize) => {
    const newWishlist = wishlist.some(
      (item) =>
        item.id === perfumes.id && item.size.label === selectedSize.label
    )
      ? wishlist.filter(
          (item) =>
            !(item.id === perfumes.id && item.size.label === selectedSize.label)
        )
      : [...wishlist, { ...perfumes, size: selectedSize }];
    setWishlist(newWishlist);
  };

  {
    /*Cart feature-------------------------------------------*/
  }
  const [cart, setCart] = useState([]);

const handleCartButton = (perfume, selectedSize) => {
  // Check if this perfume + size is already in the cart
  const exists = cart.some(
    (item) => item.id === perfume.id && item.size.label === selectedSize.label
  );

  if (exists) {
    alert("Product already added to cart!");
    return;
  }

  // Add the product if not already in the cart
  setCart([...cart, { ...perfume, size: selectedSize }]);
};

const handleRemoveFromCart = (perfume, size) => {
  const newCart = cart.filter(
    (item) => !(item.id === perfume.id && item.size.label === size.label)
  );
  setCart(newCart);
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
            handleCartButton={handleCartButton}

          ></Collections>
        </div>
        <div className="w-1/3">
          <Cart cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}>
          </Cart>
          <WishlistProducts
            wishlist={wishlist}
            handleWishlistButton={handleWishlistButton}
          ></WishlistProducts>
          <Decants></Decants>
        </div>
      </div>
    </div>
  );
};

export default Body;

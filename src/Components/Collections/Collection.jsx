import { useState } from "react";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Collection = ({perfume, wishlist, handleWishlistButton}) => {
  const liked = wishlist.some((item) => item.id === perfume.id);

  const [selectedSize, setSelectedSize] = useState(perfume.sizes[3]);

  return (
    <div className="h-full">
      <div className="card bg-base-100 w-96 shadow-sm h-full flex flex-col">
        <figure className="px-10 pt-10">
          <img src={perfume.image} alt={perfume.name} className="rounded-xl" />
        </figure>
        <div className="card-body flex flex-col justify-between flex-1 items-center text-center">
          <div className="flex gap-4">
            <h2 className="card-title">{perfume.name}</h2>
            {/*Wish List button ---------------------------------------------------*/}
            <button
              onClick={() => handleWishlistButton(perfume, selectedSize)}
              className="p-1 text-pink-500 hover:text-pink-500"
              style={{
                backgroundColor: "white",
                border: "none",
                padding: "0.25rem",
              }}
            >
              {liked ? (
                <FaHeart size={19} title="Remove From Wishlist" />
              ) : (
                <CiHeart size={24} title="Add to wishlist" />
              )}
            </button>
          </div>
          <p>{perfume.description}</p>
          {/*Dropdown-Size-btn--------------------------------------------------*/}
          <div className="flex items-center gap-2 mt-2">
            <span className="font-semibold">Size:</span>
            <select
              className="select select-bordered w-40"
              value={selectedSize.label}
              onChange={(e) =>
                setSelectedSize(
                  perfume.sizes.find((s) => s.label === e.target.value)
                )
              }
            >
              {perfume.sizes.map((s) => (
                <option key={s.label}>{s.label}</option>
              ))}
            </select>
          </div>
          {/*Price-Section--------------------------------------------------*/}
          <div className="flex items-center gap-2 mt-1">
            <span className="font-semibold">Price:</span>
            <span>BDT {selectedSize.price}</span>{" "}
          </div>
          <div className="card-actions">
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

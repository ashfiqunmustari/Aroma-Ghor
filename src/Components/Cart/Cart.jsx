import React from "react";
import { BsCartCheck } from "react-icons/bs";
import { PiHeartBreakFill } from "react-icons/pi";
import CartProduct from "./cartProduct";

const Cart = ({ cart, handleRemoveFromCart }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.size.price, 0);
  return (
    <div>
      <div
        className="max-w-4xl mx-auto p-10 mt-20 rounded-2xl"
        style={{ backgroundColor: "rgba(255, 198, 202, 0.3)" }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          My Cart <BsCartCheck size={24} className="text-pink-500" />
        </h2>

        <div className="flex flex-col gap-4 overflow-y-auto pr-2 max-h-[400px]">
          {cart.length === 0 ? (
            <p className="text-center">
              Cart is empty{" "}
              <PiHeartBreakFill className="inline text-pink-500" />
            </p>
          ) : (
            cart.map((perfume) => (
              <CartProduct
                key={perfume.id}
                perfume={perfume}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="mt-4 text-right font-semibold text-lg">
            Total: BDT {totalPrice}/-
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

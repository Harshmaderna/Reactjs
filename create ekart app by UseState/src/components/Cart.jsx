import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);
  console.log(cartItem);
  return (
    <div className="max-w-md mx-auto rounded-2xl shadow-md bg-yellow-400 my-5 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">cart Items - {}</h1>
        <button className="bg-red-600 text-white rounded-md px-3 py-1">
          Clear Cart
        </button>
      </div>
      {cartItem.length === 0 ? (
        <div>
          <p className="text-base">cart is empty</p>
          <Link to="{/}" className="underline text-blue-700"> 
            continue shopping
          </Link>
        </div>
      ) : (
        cartItem.map((item) => (
          <div className="shadow-md flex">
            <img
              src=""
              alt=""
              className="size-16 object-contain rounded-md bg-white flex justify-center items-center"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

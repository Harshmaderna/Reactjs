import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearItems } from "../app/CartSlice";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearItems())
  }
  return (
    <div className="max-w-md mx-auto rounded-2xl shadow-md bg-gray-200 my-5 p-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold">cart Items - {cartItem.length}</h1>
        <button onClick={handleClearCart} className="bg-gray-600 text-white rounded-md px-3 py-1 cursor-pointer">
          Clear Cart
        </button>
      </div>
      {cartItem.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-base">cart is empty</p>
          <Link to={"/"} className="underline text-blue-700"> 
            continue shopping
          </Link>
        </div>
      ) : (
        cartItem.map((item) => (
          <div key={item.id} className="shadow-md flex hover:shadow-2xl">
            <img
              src={item.image}
              alt="image"
              className="size-16 object-contain rounded-md bg-white flex justify-center items-center"
            />
            <div className="flex-1 flex-col">
            <p className="font-semibold">{item.title}</p>
            <p className="">Price: ${item.price}</p>
            <p className="">Rating: {item.rating.rate}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

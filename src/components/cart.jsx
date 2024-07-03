import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./itemCard";
import { clearCart } from "../utils/cartslice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="h-screen">
      <div>
        <h1 className="font-bold text-3xl flex justify-center items-center">
          Cart Items
        </h1>
      </div>
      <div className="flex">
        {cartItems.map((items) => (
          <ItemCard
            key={items?.card?.info?.id}
            {...items?.card?.info}
          ></ItemCard>
        ))}
      </div>
      <button
        className="bg-green-300 p-2 m-2 flex justify-center items-center"
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;

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
    <div className="min-h-screen">
      <div>
        <h1 className="font-bold text-3xl flex justify-center items-center font-bold">
          Cart Items
        </h1>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {cartItems.map((items) => (
          <ItemCard
            key={items?.card?.info?.id}
            {...items?.card?.info}
          ></ItemCard>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-green-300 p-2 m-2 items-center w-[100px]"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;

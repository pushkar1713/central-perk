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
    <>
      <div>
        <h1 className="font-bold text-3xl">Cart Items</h1>
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
        className="bg-green-300 p-2 m-2"
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
    </>
  );
};

export default Cart;

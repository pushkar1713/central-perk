import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1>cart items</h1>
    </div>
  );
};

export default Cart;

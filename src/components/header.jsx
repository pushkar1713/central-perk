import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Title = () => (
  <Link to="/">
    <img
      alt="Logo"
      src="https://logos-world.net/wp-content/uploads/2022/01/Central-Perk-Symbol.png"
      className="logo w-[150px] p-0 m-0"
    />
  </Link>
);

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header flex justify-between bg-[#00361b] sticky top-0 z-10">
      <Title />
      <div className="nav-items items-center">
        <ul className="flex list-none [&_li]:p-[10px] text-white m-4 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="flex">
            <IoCartOutline className="text-2xl mr-1" />
            <Link to="/cart">{cartItems.length} items</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

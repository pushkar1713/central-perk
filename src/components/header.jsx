import { Link } from "react-router-dom";

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
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

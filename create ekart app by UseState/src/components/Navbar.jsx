import { Link } from "react-router-dom";
import Video from "./Video";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <div className="navbar p-4">
      <Link to="/">
        <h1 className="text-green-800 font-bold text-2xl px-5 mt-2"> 
          shopEase
        </h1>{" "}
      </Link>
      <ul className="menu">
        <li>
          <Link className="linkes" to="/men">
            Men
          </Link>
        </li>
        <li>
          <Link className="linkes" to="/women">
            WoMen
          </Link>
        </li>
        <li>
          <Link className="linkes" to="/kids">
            Kids
          </Link>
        </li>
        <li>
          <Link className="linkes" to="/cart">
            <FaShoppingCart className=""/>
            <span className="absolute top-2  bg-red-500 text-white rounded-full flex items-center justify-center size-5 mt-1">
              {cartItem.length}
            </span>
          </Link>
        </li>
        {/* <li>
         <Link className="linkes" to="/video">video</Link>
        </li> */}
        <li>
          <Link className="linkes" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;

import { Link } from "react-router-dom"
import Video from "./Video"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className="text-green-800 font-bold text-2xl px-5 mt-2">ShopEase</h1>
      <ul className='menu'>
        <li>
         <Link className="linkes" to="/men">Men</Link>
        </li>
        <li>
         <Link className="linkes" to="/women">WoMen</Link>
        </li>
        <li>
         <Link className="linkes" to="/kids">Kids</Link>
        </li>
        <li>
         <Link className="linkes" to="/cart">Cart</Link>
        </li>
         <li>
         <Link className="linkes" to="/video">video</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar 
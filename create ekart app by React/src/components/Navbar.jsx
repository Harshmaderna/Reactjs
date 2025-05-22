import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Logo</h1>
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
        
      </ul>
    </div>
  )
}

export default Navbar

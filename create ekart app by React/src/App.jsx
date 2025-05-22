import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("hey welcome to my page");
  }, []);

  useEffect(() => {
    alert('count was changed')
  },[count])

  return (
    <>
    <Navbar color={"navy " + "blue"}/>
      <div className="cards">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          update count is {count}
        </button>
        
      </div>
    </>
  );
}

export default App;

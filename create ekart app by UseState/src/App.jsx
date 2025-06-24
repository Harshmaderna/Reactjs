import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/Index";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
      </Provider>
    </>
  );
}

export default App;

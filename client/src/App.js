import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import "./generalStyles/GlobalStyles.css";
import "./generalStyles/App.css";

function App() {

  //routing home route to Shop page as well for now
  return (
      <BrowserRouter>
        <div className="main">
          <Header />
          <Cart />
          <Routes>
            <Route path="/" element={<Navigate to="/shop" replace />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

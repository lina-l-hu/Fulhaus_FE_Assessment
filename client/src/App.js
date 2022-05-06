import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./Components/Shop";
import Header from "./Components/Header";
import "./GlobalStyles.css";

function App() {

  return (
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/shop" replace />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

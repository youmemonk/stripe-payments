import logo from "./logo.svg";
import "./App.css";
import StripeContainer from "./Components/StripeContainer";
import axo from "./assets/axo1.jpeg";
import { useState } from "react";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>Store</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$100.00</h3>
          <img src={axo} alt="Axolotl" />
          <button onClick={() => setShowItem(true)}>Purchase Axo</button>
        </>
      )}
    </div>
  );
}

export default App;

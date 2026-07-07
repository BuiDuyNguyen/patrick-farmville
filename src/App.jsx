import { useState } from "react";
import FarmGrid from "./components/FarmGrid";
import "./App.css";

function App() {
  const [gold, setGold] = useState(100);

  const [plots, setPlots] = useState(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      status: "empty",
      crop: null,
    }))
  );

  return (
    <div>
      <h1>Patrick Farmville</h1>

      <p>Gold: {gold}</p>

      <FarmGrid plots={plots} />
    </div>
  );
}

export default App;
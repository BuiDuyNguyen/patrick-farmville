import { useState } from "react";
import FarmGrid from "./components/FarmGrid";
import "./App.css";
import GoldPanel from "./components/GoldPanel";

function App() {
  const [gold, setGold] = useState(100);

  const [plots, setPlots] = useState(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      status: "empty",
      crop: null,
    }))
  );

  function handlePlotClick(plotId) {
    const selectedPlot = plots.find(
      plot => plot.id === plotId
    );

    if (!selectedPlot) {
      return;
    }

    if (selectedPlot.status !== "empty") {
      return;
    }

    if (gold < 5) {
      return;
    }

    setPlots(
      plots.map((plot) => {
        if (plot.id === plotId) {
          return {
            ...plot,
            status: "planted",
            crop: "Carrot",
          };
        }

        return plot;
      })
    );

    setGold(gold - 5);
  }

  return (
    <div>
      <h1>Patrick Farmville</h1>

      <GoldPanel gold={gold} />

      <FarmGrid 
        plots={plots}
        onPlotClick={handlePlotClick}
      />
    </div>
  );
}

export default App;
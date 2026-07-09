import { useState } from "react";
import FarmGrid from "./components/FarmGrid";
import "./App.css";
import GoldPanel from "./components/GoldPanel";
import { crops } from "./data/crops";

function App() {
  const [gold, setGold] = useState(100);

  const [plots, setPlots] = useState(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      status: "empty",
      cropId: null,
    }))
  );

  function handlePlotClick(plotId) {
    const selectedPlot = plots.find(
      plot => plot.id === plotId
    );

    const selectedCrop = crops[0];

    if (!selectedPlot) {
      return;
    }

    if (selectedPlot.status !== "empty") {
      return;
    }

    if (gold < selectedCrop.seedCost){
      return;
    }

    setPlots(
      plots.map((plot) => {
        if (plot.id === plotId) {
          return {
            ...plot,
            status: "planted",
            cropId: selectedCrop.id,
          };
        }

        return plot;
      })
    );

    setGold(gold - selectedCrop.seedCost);
  }

  return (
    <div>
      <h1>Patrick Farmville</h1>

      <GoldPanel gold={gold} />

      <FarmGrid 
        plots={plots}
        crops={crops}
        onPlotClick={handlePlotClick}
      />
    </div>
  );
}

export default App;
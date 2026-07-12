import { useState } from "react";
import FarmGrid from "./components/FarmGrid";
import GoldPanel from "./components/GoldPanel";
import { CROPS } from "./data/crops";
import "./App.css";

function App() {
  const [gold, setGold] = useState(100);

  const [plots, setPlots] = useState(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,

      // Không lưu status.
      // Status sẽ được suy diễn từ cropId, matureAt và thời gian hiện tại.
      cropId: null,
      plantedAt: null,
      matureAt: null,
    }))
  );

  const [selectedCrop, setSelectedCrop] = useState("CARROT");

  function handlePlotClick(plotId) {
    // Tìm Plot mà người chơi vừa click.
    const clickedPlot = plots.find((plot) => plot.id === plotId);

    // Nếu không tìm thấy Plot thì dừng để tránh lỗi.
    if (!clickedPlot) {
      return;
    }

    // Plot đã có cây thì không được trồng đè.
    if (clickedPlot.cropId !== null) {
      return;
    }

    // selectedCrop chỉ lưu cropId.
    // Thông tin đầy đủ được tra từ Crop Master.
    const crop = CROPS[selectedCrop];

    // Nếu selectedCrop không tồn tại trong Crop Master thì dừng.
    if (!crop) {
      return;
    }

    // Gold bằng đúng giá mua vẫn được phép trồng.
    if (gold < crop.cropBuyPrice) {
      return;
    }

    const plantedAt = Date.now();

    // growthTime dùng giây, Date.now() dùng milliseconds.
    const matureAt = plantedAt + crop.growthTime * 1000;

    setPlots((currentPlots) =>
      currentPlots.map((plot) =>
        plot.id === plotId
          ? {
              ...plot,
              cropId: crop.cropId,
              plantedAt,
              matureAt,
            }
          : plot
      )
    );

    setGold((currentGold) => currentGold - crop.cropBuyPrice);
  }

  return (
    <div>
      <h1>Patrick Farmville</h1>

      <GoldPanel gold={gold} />

      <FarmGrid
        plots={plots}
        crops={CROPS}
        onPlotClick={handlePlotClick}
      />
    </div>
  );
}

export default App;
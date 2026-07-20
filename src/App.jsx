import { useEffect, useState } from "react";
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
  const [now, setNow] = useState(() => Date.now());
  const [message, setMessage] = useState("Chọn một loại hạt giống và bắt đầu trồng!");

  useEffect(() => {
    const timerId = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timerId);
  }, []);

  function handlePlotClick(plotId) {
    // Tìm Plot mà người chơi vừa click.
    const clickedPlot = plots.find((plot) => plot.id === plotId);

    // Nếu không tìm thấy Plot thì dừng để tránh lỗi.
    if (!clickedPlot) {
      return;
    }

    // Plot đã có cây: chỉ thu hoạch khi cây đã trưởng thành.
    if (clickedPlot.cropId !== null) {
      if (now < clickedPlot.matureAt) {
        setMessage("Cây vẫn đang lớn, hãy chờ thêm một chút nhé!");
        return;
      }

      const plantedCrop = CROPS[clickedPlot.cropId];
      if (!plantedCrop) return;

      setPlots((currentPlots) =>
        currentPlots.map((plot) =>
          plot.id === plotId
            ? { ...plot, cropId: null, plantedAt: null, matureAt: null }
            : plot
        )
      );
      setGold((currentGold) => currentGold + plantedCrop.cropSellPrice);
      setMessage(`Đã thu hoạch ${plantedCrop.cropName} +${plantedCrop.cropSellPrice} vàng!`);
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
      setMessage(`Bạn cần ${crop.cropBuyPrice} vàng để trồng ${crop.cropName}.`);
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
    setMessage(`Đã trồng ${crop.cropName}. Cây sẽ lớn sau ${crop.growthTime} giây.`);
  }

  return (
    <div className="game">
      <header className="game-header">
        <div>
          <p className="eyebrow">Nông trại của Patrick</p>
          <h1>Patrick Farmville</h1>
        </div>
        <GoldPanel gold={gold} />
      </header>

      <main>
        <section className="shop" aria-labelledby="shop-title">
          <div>
            <h2 id="shop-title">Cửa hàng hạt giống</h2>
            <p>Chọn cây để trồng vào một ô đất trống.</p>
          </div>
          <div className="crop-options">
            {Object.values(CROPS).map((crop) => (
              <button
                className={selectedCrop === crop.cropId ? "crop-option selected" : "crop-option"}
                key={crop.cropId}
                onClick={() => setSelectedCrop(crop.cropId)}
                type="button"
              >
                <span>{crop.emoji} {crop.cropName}</span>
                <small>Mua {crop.cropBuyPrice} · Bán {crop.cropSellPrice}</small>
              </button>
            ))}
          </div>
        </section>

        <p className="message" aria-live="polite">{message}</p>

        <FarmGrid plots={plots} crops={CROPS} now={now} onPlotClick={handlePlotClick} />
      </main>
    </div>
  );
}

export default App;

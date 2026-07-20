function Plot({ plot, crops, now, onPlotClick }) {
  // Plot trống có cropId = null.
  //
  // Plot đã trồng sẽ dùng cropId để tra cứu
  // dữ liệu cây từ Crop Master.
  const cropData = plot.cropId
    ? crops[plot.cropId]
    : null;
  const isReady = cropData && now >= plot.matureAt;
  const secondsLeft = cropData
    ? Math.max(0, Math.ceil((plot.matureAt - now) / 1000))
    : 0;

  function handleClick() {
    // Plot chỉ thông báo lên component cha:
    // "Người chơi vừa click Plot có ID này."
    //
    // Business logic trồng cây vẫn được quản lý tại App.
    onPlotClick(plot.id);
  }

  return (
    <button
      className={`plot ${cropData ? "planted" : "empty"} ${isReady ? "ready" : ""}`}
      onClick={handleClick}
      type="button"
      aria-label={cropData ? `${cropData.cropName}, ${isReady ? "ready to harvest" : `${secondsLeft} seconds left`}` : `Empty plot ${plot.id}`}
    >
      <span className="plot-icon">{cropData ? cropData.emoji : "🟫"}</span>
      <span className="plot-label">
        {cropData ? (isReady ? "Thu hoạch" : `${secondsLeft}s`) : "Ô trống"}
      </span>
    </button>
  );
}

export default Plot;

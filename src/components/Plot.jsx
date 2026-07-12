function Plot({
  plotData,
  cropMaster,
  onPlotClick,
}) {
  // Plot trống có cropId = null.
  //
  // Plot đã trồng sẽ dùng cropId để tra cứu
  // dữ liệu cây từ Crop Master.
  const cropData = plotData.cropId
    ? cropMaster[plotData.cropId]
    : null;

  function handleClick() {
    // Plot chỉ thông báo lên component cha:
    // "Người chơi vừa click Plot có ID này."
    //
    // Business logic trồng cây vẫn được quản lý tại App.
    onPlotClick(plotData.plotId);
  }

  return (
    <button
      className="plot"
      onClick={handleClick}
    >
      {cropData ? cropData.cropName : "Empty"}
    </button>
  );
}

export default Plot;
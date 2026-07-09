function Plot({ plot, crops, onPlotClick }) {
  const crop = crops.find((crop) => crop.id === plot.cropId);

  return (
    <div
      className="plot"
      onClick={() => onPlotClick(plot.id)}
    >
      {plot.status === "empty" ? (
        <span>Empty</span>
      ) : (
        <>
          <div>
            {crop?.emoji} {crop?.name}
          </div>
          <div>{plot.status}</div>
        </>
      )}
    </div>
  );
}

export default Plot;
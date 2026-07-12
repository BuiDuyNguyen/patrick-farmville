function Plot({ plot, crops, onPlotClick }) {
  const crop = plot.cropId ? crops[plot.cropId] : null;

  return (
    <button
      className="plot"
      onClick={() => onPlotClick(plot.id)}
    >
      {crop ? crop.cropName : "Empty"}
    </button>
  );
}

export default Plot;
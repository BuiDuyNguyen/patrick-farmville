function Plot({ plot, onPlotClick }) {
  return (
    <div
      className="plot"
      onClick={() => onPlotClick(plot.id)}
    >
      {plot.status === "empty" ? (
        <span>Empty</span>
      ) : (
        <>
          <div>🌱 {plot.crop}</div>
          <div>{plot.status}</div>
        </>
      )}
    </div>
  );
}

export default Plot;
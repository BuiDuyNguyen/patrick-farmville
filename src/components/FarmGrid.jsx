import Plot from "./Plot";
import "./FarmGrid.css";

function FarmGrid({ plots, crops, now, onPlotClick }) {
  return (
    <div className="farm-grid">
      {plots.map((plot) => (
        <Plot
          key={plot.id}
          plot={plot}
          crops={crops}
          now={now}
          onPlotClick={onPlotClick}
        />
      ))}
    </div>
  );
}

export default FarmGrid;

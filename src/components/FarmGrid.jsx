import Plot from "./Plot";
import "./FarmGrid.css";

function FarmGrid({ plots, crops, onPlotClick }) {
  return (
    <div className="farm-grid">
      {plots.map((plot) => (
        <Plot
          key={plot.id}
          plot={plot}
          crops={crops}
          onPlotClick={onPlotClick}
        />
      ))}
    </div>
  );
}

export default FarmGrid;
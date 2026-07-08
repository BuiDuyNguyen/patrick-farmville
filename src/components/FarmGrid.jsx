import Plot from "./Plot";
import "./FarmGrid.css";

function FarmGrid({ plots, onPlotClick }) {
  return (
    <div className="farm-grid">
      {plots.map((plot) => (
        <Plot
          key={plot.id}
          id={plot.id}
          status={plot.status}
          crop={plot.crop}
          onClick = {onPlotClick}
        />
      ))}
    </div>
  );
}

export default FarmGrid;
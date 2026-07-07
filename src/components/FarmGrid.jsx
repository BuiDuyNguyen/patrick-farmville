import Plot from "./Plot";
import "./FarmGrid.css";

function FarmGrid({ plots }) {
  return (
    <div className="farm-grid">
      {plots.map((plot) => (
        <Plot
          key={plot.id}
          id={plot.id}
          status={plot.status}
          crop={plot.crop}
        />
      ))}
    </div>
  );
}

export default FarmGrid;
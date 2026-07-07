import Plot from "./Plot";
import "./FarmGrid.css";

function FarmGrid() {

    const plots = Array.from(
        { length: 25 },
        (_, index) => index + 1
    );

    return (
        <div className="farm-grid"> 
            {plots.map((plotId) => (
                <Plot
                    key={plotId}
                    id={plotId}
                />
            ))}
        </div>
    );
}

export default FarmGrid;
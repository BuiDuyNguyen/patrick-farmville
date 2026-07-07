import Plot from "./Plot";

function FarmGrid() {

    const plots = Array.from(
        { length: 25 },
        (_, index) => index + 1
    );

    return (
        <div>
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
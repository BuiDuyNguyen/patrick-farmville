function Plot({ id, status, crop, onClick }) {
  return (
    <div 
      className="plot"
      onClick={() => onClick(id)}
    >
      Plot {id}
      <br />
      {status}
    </div>
  );
}

export default Plot;
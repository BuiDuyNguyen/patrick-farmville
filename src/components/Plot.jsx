function Plot({ id, status, crop }) {
  return (
    <div className="plot">
      Plot {id}
      <br />
      {status}
    </div>
  );
}

export default Plot;
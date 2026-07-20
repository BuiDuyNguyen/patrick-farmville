function GoldPanel({ gold }) {
  return (
    <div className="gold-panel" aria-label={`${gold} gold`}>
      <span>🪙</span>
      <strong>{gold}</strong>
      <span>vàng</span>
    </div>
  );
}

export default GoldPanel;

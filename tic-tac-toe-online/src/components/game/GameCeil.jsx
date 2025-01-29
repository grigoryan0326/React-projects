import GameSymbol from "./GameSymbol"

export default function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={`cell ${isWinner ? "cell--win" : ""}`}
      onClick={onClick}
      disabled={symbol}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  )
}

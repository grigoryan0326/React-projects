import clsx from "clsx"
import GameSymbol from "./GameSymbol"

export default function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-[#229abf] mt[-1px] ml[-1px] flex justify-center items-center  cursor-pointer disabled:bg-[#c2adad1a] disabled:cursor-not-allowed bg-transparent",
        isWinner && "!bg-[#daa520] text-white"
      )}
      onClick={onClick}
      disabled={symbol}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  )
}

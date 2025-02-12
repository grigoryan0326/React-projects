import clsx from "clsx"
import getIcon from "@/utils/getSVGIcon"

const GameCell = ({ onClick, id, disabled, symbol, isWinner }) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center border border-slate-200 -ml-px -mt-px",
        isWinner && "bg-orange-600/10",
        disabled && "cursor-not-allowed"
      )}
      onClick={onClick}
      data-id={id}
      disabled={disabled}
    >
      {getIcon(symbol, "w-5 h-5")}
    </button>
  )
}
export default GameCell

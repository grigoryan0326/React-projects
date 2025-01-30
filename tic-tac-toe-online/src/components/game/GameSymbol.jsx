import clsx from "clsx"
import { SYMBOL_O, SYMBOL_X } from "../../constants/Constants"

export default function GameSymbol({ symbol }) {
  return (
    <span
      className={clsx(
        "text-[40px] leading-[24px]",
        symbol === SYMBOL_O && "text-[#008000]",
        symbol === SYMBOL_X && "text-[#ff0000]"
      )}
    >
      {symbol}
    </span>
  )
}

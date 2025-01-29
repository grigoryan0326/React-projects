import { SYMBOL_O, SYMBOL_X } from "../../constants/Constants"

export default function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "symbol--o"
    if (symbol === SYMBOL_X) return "symbol--x"
    return ""
  }
  return (
    <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
  )
}

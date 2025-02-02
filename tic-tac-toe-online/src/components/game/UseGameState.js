import { useState } from "react"

const GAME_SYMBOLS = {
  ROUND: "round",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
}

const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ROUND,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
]

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1
  return MOVE_ORDER[nextMoveIndex % MOVE_ORDER.length]
}

const UseGameState = () => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }))

  const nextMove = getNextMove(currentMove)

  const handleCellClick = (i) => {
    if (cells[i] !== null) return

    setGameState((prev) => ({
      ...prev,
      cells: prev.cells.map((cell, index) =>
        index === i ? currentMove : cell
      ),
      currentMove: nextMove,
    }))
  }

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  }
}
export default UseGameState

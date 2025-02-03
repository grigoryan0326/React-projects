import { useState } from "react"

export const GAME_SYMBOLS = {
  ROUND: "circle",
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

function getNextMove(currentMove, playersCount) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)
  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
  return slicedMoveOrder[nextMoveIndex % slicedMoveOrder.length]
}

const UseGameState = (playersCount) => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }))

  const nextMove = getNextMove(currentMove, playersCount)

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

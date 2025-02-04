import { useState } from "react"
import { computeWinner, getNextMove } from "./model"

export const GAME_SYMBOLS = {
  ROUND: "circle",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
}

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ROUND,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
]

const useGameState = (playersCount) => {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    })
  )

  const winnerSequence = computeWinner(cells)
  let winnerSymbol = winnerSequence
    ? cells[winnerSequence[0]]
    : playersCount - playersTimeOver.length === 1
    ? currentMove
    : null
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver)

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

  const handlePlayerTimeOver = (symbol) => {
    setGameState((prev) => ({
      ...prev,
      playersTimeOver: [...prev.playersTimeOver, symbol],
      currentMove: nextMove,
    }))
  }

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  }
}
export default useGameState

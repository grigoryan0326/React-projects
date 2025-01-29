import { useState } from "react"
import { SYMBOL_O, SYMBOL_X } from "@/constants/Constants"

export default function UseGameState() {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ])

  const [currentStep, setCurrentStep] = useState(SYMBOL_O)
  const [winnerSequence, setWinnerSequence] = useState(null)
  const [isDraw, setIsDraw] = useState(false)

  const handleCellClick = (index) => {
    if (winnerSequence || cells[index]) return

    const newCells = [...cells]
    newCells[index] = currentStep
    setCells(newCells)
    setCurrentStep((prev) => (prev === SYMBOL_O ? SYMBOL_X : SYMBOL_O))

    const computeWinner = (cells) => {
      const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]

      for (let i = 0; i < winLines.length; i++) {
        const [a, b, c] = winLines[i]
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
          return [a, b, c]
        }
      }

      if (cells.every((cell) => cell)) {
        setIsDraw(true)
      }

      return false
    }

    const winner = computeWinner(newCells)
    if (winner) setWinnerSequence(winner)
  }

  const handleReload = () => {
    setCurrentStep(SYMBOL_O)
    setCells([null, null, null, null, null, null, null, null, null])
    setWinnerSequence(null)
    setIsDraw(false)
  }

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : null

  return {
    cells,
    currentStep,
    winnerSequence,
    isDraw,
    handleCellClick,
    handleReload,
    winnerSymbol,
  }
}

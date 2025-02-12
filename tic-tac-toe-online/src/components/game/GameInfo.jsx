import clsx from "clsx"
import Profile from "../profile"
import getIcon from "@/utils/getSVGIcon"
import { GAME_SYMBOLS } from "./model/useGameState"

import { useEffect, useState } from "react"

const GameInfo = ({
  className,
  playersCount,
  currentMove,
  isWinner,
  winnerSymbol,
  handlePlayerTimeOver,
}) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-items-center"
      )}
    >
      {players.slice(0, playersCount).map((player) => (
        <PlayerInfo
          isRight={player.id % 2 === 0}
          key={player.id}
          playerInfo={player}
          isTimerRunning={player.symbol === currentMove && !winnerSymbol}
          onTimeOver={() => handlePlayerTimeOver(player.symbol)}
          winnerSymbol={winnerSymbol}
        />
      ))}
    </div>
  )
}

function PlayerInfo({
  playerInfo,
  isRight,
  isTimerRunning,
  onTimeOver,
  winnerSymbol,
}) {
  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0))
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [isTimerRunning, winnerSymbol])

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver()
    }
  }, [seconds])

  return null
}

export default GameInfo

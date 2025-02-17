import GameLayout from "./UI/GameLayout"

import { PLAYERS } from "./constants"

import BackLink from "./UI/BackLink"
import GameTitle from "./UI/GameTitle"
import GameInfo from "./UI/GameInfo"
import PlayerInfo from "./UI/PlayerInfo"
import GameMoveInfo from "./UI/GameMoveInfo"
import GameCell from "./UI/GameCell"
import GameOverModal from "./UI/GameOverModal"
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/gameStateReducer"
import { useReducer } from "react"
import { computeWinner } from "./model/computeWinner"
import { getNextMove } from "./model/getNextMove"
import { computeWinnerSymbol } from "./model/computeWinnerSymbol"
import { computePlayerTimer } from "./model/computePlayerTimer"
import { useInterval } from "../lib/timers"

const playersCount = 4

const Game = () => {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount, defaultTimer: 6000, currentMoveStart: Date.now() },
    initGameState
  )

  const { cells, currentMove, timers } = gameState

  useInterval(1000, gameState.currentMoveStart, () => {
    dispatch({
      type: GAME_STATE_ACTIONS.TICK,
      now: Date.now(),
    })
  })

  const winnerSequence = computeWinner(cells)
  const nextMove = getNextMove(gameState)
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  })

  const winnerName = winnerSymbol
    ? PLAYERS.find((player) => player.symbol === winnerSymbol)?.name
    : null

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        info={
          <GameInfo
            isRatingGame
            playersCount={playersCount}
            timeMode={"1 min per move"}
          />
        }
        playersList={PLAYERS.slice(0, playersCount).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol
          )
          return (
            <PlayerInfo
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              key={player.id}
              timer={timer}
              timerStartAt={timerStartAt}
              symbol={player.symbol}
              isRight={index % 2 === 1}
            />
          )
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={currentMove}
            nextMove={nextMove}
          />
        }
        gameCells={cells.map((cell, i) => {
          return (
            <GameCell
              isWinner={winnerSequence ? winnerSequence.includes(i) : false}
              key={i}
              onClick={() =>
                dispatch({
                  type: GAME_STATE_ACTIONS.CELL_CLICK,
                  index: i,
                  now: Date.now(),
                })
              }
              id={i}
              disabled={!!winnerSymbol}
              symbol={cell}
            />
          )
        })}
      />
      <GameOverModal
        players={PLAYERS.slice(0, playersCount).map((player, index) => {
          return (
            <PlayerInfo
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              key={player.id}
              timer={timers[player.symbol]}
              symbol={player.symbol}
              isRight={index % 2 === 1}
              isTimerRunning={false}
            />
          )
        })}
        winnerName={winnerName}
      />
    </>
  )
}
export default Game

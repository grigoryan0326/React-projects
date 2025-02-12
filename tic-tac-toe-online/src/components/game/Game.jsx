import GameLayout from "./UI/GameLayout"

import { PLAYERS } from "./constants"

import useGameState from "./model/useGameState"

import BackLink from "./UI/BackLink"
import GameTitle from "./UI/GameTitle"
import GameInfo from "./UI/GameInfo"
import PlayerInfo from "./UI/PlayerInfo"
import GameMoveInfo from "./UI/GameMoveInfo"
import GameCell from "./UI/GameCell"
import GameOverModal from "./UI/GameOverModal"

const playersCount = 2

const Game = () => {
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  } = useGameState(playersCount)

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
          return (
            <PlayerInfo
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              key={player.id}
              seconds={60}
              symbol={player.symbol}
              isRight={index % 2 === 1}
              isTimerRunning={false}
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
              onClick={() => handleCellClick(i)}
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
              seconds={60}
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

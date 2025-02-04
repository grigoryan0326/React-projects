import { useState } from "react"

import Header from "@/components/header"
import { GameTitle, GameInfo, GameField } from "@/components/game"
import useGameState from "@/components/game/useGameState"

const HomePage = () => {
  const [playersCount, setPlayersCount] = useState(4)
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    winnerSymbol,
    handlePlayerTimeOver,
  } = useGameState(playersCount)

  return (
    <div className='bg-slate-50 min-h-screen'>
      <Header />
      <main className='pt-6 mx-auto w-max'>
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className='mt-4'
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={!!winnerSequence}
          winnerSymbol={winnerSymbol}
          handlePlayerTimeOver={handlePlayerTimeOver}
        />
        <GameField
          className='mt-6 mb-6'
          playersCount={playersCount}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          cells={cells}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  )
}

export default HomePage

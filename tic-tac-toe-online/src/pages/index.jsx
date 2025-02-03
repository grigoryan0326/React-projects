import { useState } from "react"
import Header from "@/components/header"
import { GameTitle, GameInfo, GameField } from "@/components/game"
import UseGameState from "@/components/game/UseGameState"

const HomePage = () => {
  const [playersCount, setPlayersCount] = useState(4)
  const { cells, currentMove, nextMove, handleCellClick } =
    UseGameState(playersCount)

  return (
    <div className='bg-slate-50 min-h-screen'>
      <Header />
      <main className='pt-6 mx-auto w-max'>
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className='mt-4'
          playersCount={playersCount}
          currentMove={currentMove}
          nextMove={nextMove}
        />
        <GameField
          className='mt-6 mb-6'
          playersCount={playersCount}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          cells={cells}
        />
      </main>
    </div>
  )
}

export default HomePage

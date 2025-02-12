import { useState } from "react"

import useGameState from "@/components/game/model/useGameState"
import Header from "@/components/header"
import { GameTitle, GameInfo, GameField, Game } from "@/components/game"
import UIModal from "@/components/game/UI/UIModal"
import UIButton from "@/components/game/UI/UIButton"

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
    <HomePageLayout header={<Header />}>
      {/* <GameTitle playersCount={playersCount} />
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
      /> */}
      <Game />
    </HomePageLayout>
  )
}

function HomePageLayout({ header, children }) {
  return (
    <div className='bg-slate-50 min-h-screen'>
      {header}
      <main className='pt-6 mx-auto w-max'>{children}</main>
    </div>
  )
}

export default HomePage

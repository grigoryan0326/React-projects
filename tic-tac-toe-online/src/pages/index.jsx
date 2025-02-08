import { useState } from "react"

import Header from "@/components/header"
import { GameTitle, GameInfo, GameField } from "@/components/game"
import useGameState from "@/components/game/useGameState"
import UIModal from "@/components/ui/UIModal"
import UIButton from "@/components/ui/UIButton"

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
        <UIModal
          width={"md"}
          isOpen={!!winnerSymbol}
        >
          <UIModal.Header>Game Over!</UIModal.Header>
          <UIModal.Body>
            <div className='text-sm'>
              Winner: <span className='text-teal-600'>Karen</span>
            </div>
          </UIModal.Body>
          <UIModal.Footer>
            <UIButton
              size='md'
              variant='outline'
            >
              Quit
            </UIButton>
            <UIButton
              size='md'
              variant='primary'
            >
              Restart
            </UIButton>
          </UIModal.Footer>
        </UIModal>
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

import clsx from "clsx"

import UIButton from "./UI/UIButton"
import getIcon from "@/utils/getSVGIcon"

const GameField = ({
  className,
  playersCount,
  cells,
  currentMove,
  nextMove,
  handleCellClick,
  winnerSequence,
  winnerSymbol,
}) => {
  const actions = (
    <div>
      <UIButton
        size='md'
        variant='primary'
      >
        Draw
      </UIButton>
      <UIButton
        size='md'
        variant='outline'
        className='ml-2'
      >
        Give up
      </UIButton>
    </div>
  )

  return (
    <GameFieldLayout className={clsx(className)}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, i) => (
          <GameCell
            isWinner={winnerSequence ? winnerSequence.includes(i) : false}
            key={i}
            onClick={() => handleCellClick(i)}
            id={i}
            disabled={!!winnerSymbol}
          >
            {getIcon(symbol, "w-5 h-5")}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  )
}

function GameFieldLayout({ children, className }) {
  return null
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return <div className='flex justify-between items-center'>{actions}</div>
}

function GameGrid({ children }) {
  return (
    <div className='grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px mt-3'>
      {children}
    </div>
  )
}

function GameCell({ children, onClick, id, isWinner, disabled }) {
  return null
}

export default GameField

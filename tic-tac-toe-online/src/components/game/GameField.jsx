import clsx from "clsx"

import UIButton from "../ui/UIButton"
import getIcon from "@/utils/getSVGIcon"

import UseGameState from "./UseGameState"

const GameField = ({ className, playersCount }) => {
  const { cells, currentMove, nextMove, handleCellClick } = UseGameState(playersCount)

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
            key={i}
            onClick={() => handleCellClick(i)}
          >
            <span>{getIcon(symbol, "w-5 h-5")}</span>
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  )
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      {children}
    </div>
  )
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <div className='flex gap-1 items-center text-slate-900 text-xl font-semibold leading-tight'>
          Current: {getIcon(currentMove, "w-5 h-5")}
        </div>
        <div className='flex gap-1 items-center text-xs leading-tight text-slate-400'>
          Next: {getIcon(nextMove, "w-3 h-3")}
        </div>
      </div>
      {actions}
    </div>
  )
}

function GameGrid({ children }) {
  return (
    <div className='grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px mt-3'>
      {children}
    </div>
  )
}

function GameCell({ children, onClick }) {
  return (
    <button
      className='flex items-center justify-center border border-slate-200 -ml-px -mt-px '
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default GameField

import getIcon from "@/utils/getSVGIcon"
import clsx from "clsx"
import UIButton from "../ui/UIButton"

const cells = new Array(19 * 19).fill(null)

const GameField = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      <div className='flex justify-between items-center'>
        <div>
          <div className='flex gap-1 items-center text-slate-900 text-xl font-semibold leading-tight'>
            Current: {getIcon("round", "w-5 h-5")}
          </div>
          <div className='flex gap-1 items-center text-xs leading-tight text-slate-400'>
            Next: {getIcon("cross", "w-3 h-3")}
          </div>
        </div>

        <div className='flex gap-3 items-center'>
          <UIButton
            size='md'
            variant='primary'
          >
            Draw
          </UIButton>
          <UIButton
            size='md'
            variant='outline'
          >
            Give up
          </UIButton>
        </div>
      </div>
      <div className='grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px mt-3'>
        {cells.map((_cell, i) => (
          <button
            key={i}
            className='flex items-center justify-center border border-slate-200 -ml-px -mt-px '
          >
            {getIcon("square", "w-5 h-5")}
          </button>
        ))}
      </div>
    </div>
  )
}
export default GameField

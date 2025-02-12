import getIcon from "@/utils/getSVGIcon"

const GameMoveInfo = ({ currentMove, nextMove }) => {
  return (
    <>
      <div className='flex gap-1 items-center text-slate-900 text-xl font-semibold leading-tight'>
        Current: {getIcon(currentMove, "w-5 h-5")}
      </div>
      <div className='flex gap-1 items-center text-xs leading-tight text-slate-400'>
        Next: {getIcon(nextMove, "w-3 h-3")}
      </div>
    </>
  )
}
export default GameMoveInfo

import clsx from "clsx"

const GameLayout = ({
  backLink,
  title,
  info,
  playersList,
  gameMoveInfo,
  actions,
  gameCells,
}) => {
  return (
    <div className='pb-10'>
      <div className='pl-2'>
        {backLink}
        {title}
        {info}
      </div>
      <div
        className={clsx(
          "mt-4 bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3"
          // playerInfo.symbol === winnerSymbol && "bg-green-600/50 p-3 rounded-lg"
        )}
      >
        {playersList}
      </div>
      <div className='mt-6 bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'>
        <div className='flex justify-between items-center'>
          <div>{gameMoveInfo}</div>
          {actions}
        </div>
        <div className='grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px mt-3'>
          {gameCells}
        </div>
      </div>
    </div>
  )
}
export default GameLayout

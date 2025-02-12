import getIcon from "@/utils/getSVGIcon"

const GameInfo = ({ playersCount, isRatingGame, timeMode }) => {
  return (
    <div className='flex items-center gap-3 text-xs'>
      <p>{isRatingGame && getIcon("star")}</p>
      <p className='flex items-center gap-1'>
        {timeMode && getIcon("user")}
        {playersCount}
      </p>
      <p className='flex items-center gap-1'>
        {getIcon("time")} {timeMode}
      </p>
    </div>
  )
}
export default GameInfo

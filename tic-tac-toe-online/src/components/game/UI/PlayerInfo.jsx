import Image from "next/image"
import clsx from "clsx"

import getIcon from "@/utils/getSVGIcon"

const PlayerInfo = ({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  seconds,
  isTimerRunning,
}) => {
  const minutesString = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")
  const secondsString = (seconds % 60).toString().padStart(2, "0")

  const isDanger = seconds < 10

  const getTimerColor = () => {
    if (isTimerRunning) return isDanger ? "text-orange-600" : "text-teal-900"
    return "text-slate-300"
  }

  return (
    <div className='flex items-center gap-3'>
      <div className={clsx("relative", isRight && "order-3")}>
        <div className='flex items-center gap-2 text-start text-teal-600 w-44'>
          <Image
            src={avatar}
            alt='avatar'
            width={40}
            height={40}
            unoptimized
          />
          <div className='overflow-hidden'>
            <div className='text-lg leading-tight truncate'>{name}</div>
            <div className='text-slate-400 text-xs leading-tight'>
              Raiting: {rating}
            </div>
          </div>
        </div>
        <div className='w-5 h-5 rounded-full absolute bg-white shadow -left-1 -top-1 flex items-center justify-center'>
          {getIcon(symbol)}
        </div>
      </div>
      <div
        className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  )
}
export default PlayerInfo

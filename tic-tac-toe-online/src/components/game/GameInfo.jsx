import clsx from "clsx"
import Profile from "../profile"
import getIcon from "@/utils/getSVGIcon"
import { GAME_SYMBOLS } from "./UseGameState"

import avatarSrc1 from "./images/avatar-1.png"
import avatarSrc2 from "./images/avatar-2.png"
import avatarSrc3 from "./images/avatar-3.png"
import avatarSrc4 from "./images/avatar-4.png"
import { useEffect, useState } from "react"

const players = [
  {
    id: 1,
    name: "Karen",
    rating: 333,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Bob",
    rating: 555,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ROUND,
  },
  {
    id: 3,
    name: "Aliceeeeeee",
    rating: 444,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "VereIntedinglapotur",
    rating: 222,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
]

const GameInfo = ({ className, playersCount, currentMove, nextMove }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-items-center"
      )}
    >
      {players.slice(0, playersCount).map((player) => (
        <PlayerInfo
          isRight={player.id % 2 === 0}
          key={player.id}
          playerInfo={player}
          isTimerRunning={player.symbol === currentMove}
        />
      ))}
      {/* <div className='flex items-center gap-3'>
        <div className='relative'>
          <Profile />
          <div className='w-5 h-5 rounded-full absolute bg-white shadow -left-1 -top-1 flex items-center justify-center'>
            {getIcon("cross")}
          </div>
        </div>
        <div className='h-6 w-px bg-slate-200'></div>
        <div className='text-teal-900 text-lg font-semibold'>01:08</div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='text-orange-600 text-lg font-semibold'>00:08</div>
        <div className='h-6 w-px bg-slate-200'></div>
        <div className='relative'>
          <Profile />
          <div className='w-5 h-5 rounded-full absolute bg-white shadow -left-1 -top-1 flex items-center justify-center'>
            {getIcon("circle")}
          </div>
        </div>
      </div> */}
    </div>
  )
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning }) {
  const [seconds, setSeconds] = useState(60)

  const minutesString = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")
  const secondsString = (seconds % 60).toString().padStart(2, "0")

  const isDanger = seconds < 10

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0))
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [isTimerRunning])

  const getTimerColor = () => {
    if (isTimerRunning) return isDanger ? "text-orange-600" : "text-teal-900"
    return "text-slate-300"
  }

  return (
    <div className='flex items-center gap-3'>
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className='w-44'
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className='w-5 h-5 rounded-full absolute bg-white shadow -left-1 -top-1 flex items-center justify-center'>
          {getIcon(playerInfo.symbol)}
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

export default GameInfo

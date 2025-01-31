import Link from "next/link"

import getIcon from "@/utils/getSVGIcon"

const GameTitle = () => {
  return (
    <div className='pl-2'>
      <Link
        href='/'
        className='flex items-center gap-2 text-xs text-teal-600 bg-transparent leading-tight -mb-0.5'
      >
        {getIcon("arrow-left")}
        Home
      </Link>
      <h1 className='text-4xl leading-tight text-black'>Tic-Tac-Toe</h1>
      <div className='flex items-center gap-3 text-xs'>
        <p>{getIcon("star")}</p>
        <p className='flex items-center gap-1'>{getIcon("user")}2</p>
        <p className='flex items-center gap-1'>
          {getIcon("time")}1 min per move
        </p>
      </div>
    </div>
  )
}
export default GameTitle

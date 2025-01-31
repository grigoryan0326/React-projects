import clsx from "clsx"
import Profile from "../profile"
import getIcon from "@/utils/getSVGIcon"

const GameInfo = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 flex items-center justify-between"
      )}
    >
      <div className='flex items-center gap-3'>
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
            {getIcon("round")}
          </div>
        </div>
      </div>
    </div>
  )
}
export default GameInfo

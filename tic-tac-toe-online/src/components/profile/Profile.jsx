import Image from "next/image"
import avatarSrc from "./avatar.png"
import clsx from "clsx"

const Profile = ({ className }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className
      )}
    >
      <Image
        src={avatarSrc}
        alt='avatar'
        width={40}
        height={40}
        unoptimized
      />
      <div className='flex flex-col column'>
        <div className='text-lg leading-tight'>Karen</div>
        <div className='text-slate-400 text-xs leading-tight'>Raiting: 333</div>
      </div>
    </div>
  )
}
export default Profile

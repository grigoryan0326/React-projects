import Image from "next/image"
import clsx from "clsx"

import avatarSrc from "./avatar.png"

const Profile = ({ className, name, rating, avatar = avatarSrc }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className
      )}
    >
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
  )
}
export default Profile

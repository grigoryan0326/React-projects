/**
 * @param {
 *  width: 'md' | 'full',
 *  isOpen: boolean,
 *  className: string,
 *  children: React.ReactNode,
 *  onClose: () => void
 * } props
 * @returns
 */

import getIcon from "@/utils/getSVGIcon"
import clsx from "clsx"
import { createPortal } from "react-dom"

const UIModal = ({
  width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}) => {
  if (!isOpen) {
    return null
  }

  const handleClick = (e) => {
    if (e.target.closest("[data-name='modal']")) {
      return
    }
    onClose()
  }

  const modal = (
    <div
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10 overflow-y-auto",
        className
      )}
      onClick={handleClick}
    >
      <div
        className={clsx(
          "bg-white rounded-lg min-h-[320px] mx-auto relative flex flex-col",
          {
            md: "max-w-[640px] w-full",
            full: "mx-5",
          }[width]
        )}
        data-name='modal'
      >
        <button
          className='w-8 h-8 bg-white/10 flex justify-center items-center hover:bg-white/40 absolute top-0 
        left-[calc(100%+12px)] rounded transition-colors'
          onClick={onClose}
        >
          {getIcon("close", "w-4 h-4 text-white")}
        </button>
        {children}
      </div>
    </div>
  )

  return createPortal(modal, document.getElementById("modals"))
}

UIModal.Header = function UIModalHeader({ children, className }) {
  return (
    <div className={clsx("px-6 pt-6 pb-4 text-2xl", className)}>{children}</div>
  )
}
UIModal.Body = function UIModalBody({ children, className }) {
  return <div className={clsx("px-6 ", className)}>{children}</div>
}
UIModal.Footer = function UIModalFooter({ children, className }) {
  return (
    <div className={clsx("p-6 mt-auto flex gap-4 justify-end", className)}>
      {children}
    </div>
  )
}

export default UIModal

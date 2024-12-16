'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface ModalProps {
  children: React.ReactNode
  onClose?: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog) {
      dialog.showModal()
    }
    return () => {
      if (dialog?.open) dialog.close()
    }
  }, [])

  const handleClose = () => {
    dialogRef.current?.close()
    if (onClose) {
      onClose()
    } else {
      router.back()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className='bg-transparent p-0 m-0 pt-[15vh] w-full h-full grid place-items-center backdrop:bg-black backdrop:bg-opacity-50'
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose()
      }}
    >
      <div 
        className='bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 overflow-hidden' 
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </dialog>
  )
}

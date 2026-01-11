'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, TriangleAlert, X } from 'lucide-react'

interface NotificationProps {
  title?: string
  description?: string
  duration?: number
  error?: boolean
}

const Notification = ({
  title = '',
  description = '',
  duration = 4000,
  error = false,
}: NotificationProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div className="flex items-start gap-3 bg-white shadow-lg rounded-lg px-4 py-3 w-[340px]">
        {error ? (
          <TriangleAlert className="text-red-500 mt-1" size={22} />
        ) : (
          <CheckCircle className="text-green-500 mt-1" size={22} />
        )}

        <div className="flex-1">
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="cursor-pointer text-gray-400 hover:text-gray-600 transition"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}

export default Notification

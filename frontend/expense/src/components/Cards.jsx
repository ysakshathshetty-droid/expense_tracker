import React from 'react'

export default function Cards({icon,title,amount,footer,color}) {
       const colorClasses={
              purple:"text-purple-500",
              red:"text-red-500",
              yellow:"text-yellow-500"
       }
  return (
    <div className="bg-white rounded-xl shadow-md p-4  h-full mt-3 ">
      <div className="flex items-center gap-4 h-full">

        <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0">
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain"
          />
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-2xl font-bold">
            {amount}
          </h2>

          <p className={`${colorClasses[color]}`}>
            {footer}
          </p>
        </div>

      </div>
    </div>
  )
}

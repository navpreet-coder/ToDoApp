import React from 'react'
import Names from '../constants/Names'

export default function Header() {
    return (
        <div className="flex flex-col sm:flex-row bg-green-100 items-center justify-center gap-2 p-4">

            <img className="w-12 h-12" src="https://img.icons8.com/nolan/64/tasklist.png" alt="logo" />
            <h2 className="font-extrabold text-xl sm:text-3xl text-amber-600 text-center">{Names.APP_NAME}</h2>
        </div>
    )
}

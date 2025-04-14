import React from 'react'
import { Link } from 'react-router-dom'

type redirectTypes = {
    txt1: string, txt2: string, to: string
}
export default function RedirectTo({ txt1, txt2, to }: redirectTypes) {
    return (
        <div className='flex mt-5 items-center justify-end '>
            <p className='text-sm text-gray-600 mt-4'>{txt1}<Link to={to} className='text-blue-600 hover:underline hover:text-blue-800 transition-colors'>{txt2}</Link></p>
        </div>
    )
}

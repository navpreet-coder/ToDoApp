import React, { ReactElement, ReactNode } from 'react'
type props = {
    children: ReactNode
}
export default function CardWrapper({ children }: props) {
    return (
        <div className='bg-yellow-100 w-full max-w-md h-max flex flex-col items-center justify-center p-5 rounded-lg shadow-md'>{children}</div>
    )
}

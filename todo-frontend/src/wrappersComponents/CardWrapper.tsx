import React, { ReactElement, ReactNode } from 'react'
type props = {
    children: ReactNode
}
export default function CardWrapper({ children }: props) {
    return (
        <div className='bg-pink-200 w-2xl h-3/4 items-center justify-center p-5'>{children}</div>
    )
}

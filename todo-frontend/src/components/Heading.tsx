import React from 'react'

type HeadingTypes={
    name:string
}
export default function Heading({ name }:HeadingTypes) {
    return (
        <div className='flex justify-center'>
            <h3 className='text-2xl font-bold text-blue-500'>{name}</h3>
        </div>
    )
}

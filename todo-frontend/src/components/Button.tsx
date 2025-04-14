import React from 'react'
type btnTypes = {
    btnTxt: string,
    onClick: () => void
}
export default function Button({ btnTxt, onClick }: btnTypes) {
    return (
        <div className='mt-5 items-center justify-center flex h-15'>
            <button
                className='w-[90%] bg-gray-900 h-[90%] rounded-[2rem] text-amber-50 font-semibold text-2xl hover:bg-gray-800 active:bg-gray-700 hover:text-amber-100 active:text-white transition duration-200 ease-in-out shadow-md hover:shadow-lg active:scale-95'
                onClick={onClick}>
                {btnTxt}
            </button>
        </div>
    )
}

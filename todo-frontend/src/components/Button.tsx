import React from 'react'
type btnTypes = {
    btnTxt: string,
    onClick: () => void
}
export default function Button({ btnTxt, onClick }: btnTypes) {
    return (
        <div className='mt-5 w-full max-w-md flex items-center justify-center'>
            <button
                className='w-full bg-gray-900 py-3 rounded-full text-white font-semibold text-lg sm:text-xl hover:bg-gray-800 active:bg-gray-700 transition duration-200 ease-in-out shadow-md hover:shadow-lg active:scale-95'
                onClick={onClick}>
                {btnTxt}
            </button>
        </div>
    )
}

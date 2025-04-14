import React, { memo, useCallback, useState } from 'react'

type inputType = {
    text: string,
    placeholder: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    // toggleShow?:()=>void
}
const Input = ({ text, placeholder, value, onChange }: inputType) => {
    console.log('input is rendering');

    const showPwdField = text == 'Password';
    const [show, setShow] = useState(true)
    const toggleShow = useCallback(() => {
        setShow(e => !e)
    }, [])
    return (
        <div className='flex flex-col'>
            <h5 className='font-medium '>{text}</h5>
            {/* <div className='shadow-2xs rounded-3xl bg-amber-200 m-2 flex  items-center'> */}
            <div className="relative shadow-2xs rounded-3xl bg-amber-200 m-2 flex items-center w-full">

                <input
                    placeholder={placeholder}
                    value={value}
                    type={showPwdField ? show ? 'text' : 'password' : 'text'}
                    onChange={onChange}
                    className={`p-2 ml-5 flex focus:outline-none ${showPwdField ? 'flex-11/12' : 'flex-1'}`}
                />
                {showPwdField ? <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 transition-colors"

                    //    className='flex-1/12 pl-1 mt-4 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 transition-colors'
                    onClick={toggleShow}>{show ? 'hide' : 'show'}</button> : null}
            </div>
        </div>
    )
}

export default memo(Input);
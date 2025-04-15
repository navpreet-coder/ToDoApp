import React from 'react'

export default function ErrorMsg({errorMsg}:{errorMsg:string}) {
  return (
    <label className="text-red-600 mt-2">{errorMsg}</label>
  )
}

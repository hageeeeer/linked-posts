import React from 'react'
import {HashLoader} from 'react-spinners'
export default function Loading() {
  return (
    <div className='flex justify-center'>
      <HashLoader></HashLoader>
    </div>
  )
}

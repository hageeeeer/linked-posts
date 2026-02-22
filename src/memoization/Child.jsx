import React, { memo } from 'react'

export default memo(function Child({ data ,makelogic}) {
    console.log('render child');
    makelogic()
  return (
    <div>Child: {data.name}</div>
  )
})

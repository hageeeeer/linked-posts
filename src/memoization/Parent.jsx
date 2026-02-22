import React, { useCallback, useMemo } from 'react'
import Child from './Child'

export default function Parent() {

   
    const [count, setCount] = React.useState(0);
    
    const data = useMemo(()=>(
        {
        name: 'John',
        age: 30
    }), [])

    function makelogic()
    {
        console.log('logic is running');
    }
const memoizedMakelogic = useCallback(() => {
        makelogic();
    }, [])
    function increment() {  
            setCount(count + 1);
    }

  return (
    <div>Parent
        <Child data={data} makelogic={memoizedMakelogic}></Child>
        <button onClick={increment}>Increment Count {count}</button>
    </div>
  )
}

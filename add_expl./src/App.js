import React, { useState, useReducer } from "react"

// export default function App() {
//   const [count, setCount] = useState(0)

//   function increment() {
//     setCount(prevCount => prevCount + 1)
//   }

//   function decrement() {
//     setCount(prevCount => prevCount - 1)
//   }



//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <span>{count}</span>
//       <button onClick={increment}>+</button>
//     </>
//   )
// }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count + 1 }

  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch({ type: 'increment' })
  }

  function decrement() {
    dispatch({ type: 'decrement' })
  }



  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}



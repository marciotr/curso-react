// import { useState } from 'react';
import './styles.css';

function Button({count, setCount}) {
  // const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default Button

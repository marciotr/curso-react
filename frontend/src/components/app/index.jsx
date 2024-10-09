import { useState } from 'react';
import './styles.css';
import Title from '../title';
import Button from '../button';

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("JOTA")

  const handleInput = (nowText) => {
    setText(nowText.value);
  };

  return (
    <>
      <input type="text" value={text} onChange={(e) => handleInput(e.target)}/>
      <Title name={text} P={count > 3}/>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Button count={count} setCount={setCount}/>
      </div>
    </>
  )
}

export default App

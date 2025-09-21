import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice')
    .then((data) => setAdvice(data.data.slip.advice))
    .catch((error) => console.log(error))
  }, [advice])
  return (
    <div className='app'>
      <div className="card">
          <h1 className='advice'>{advice && advice}</h1>
          <button onClick={() => setAdvice("")}>
            <span>GIVE ME ADVICE!</span>
          </button>
      </div>
    </div>
  )
}

export default App

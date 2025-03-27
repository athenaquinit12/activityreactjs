import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent  from './Counter'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)

  function addCount(){
    setCount(count+1)
  }
  function minusCount(){
    setCount(count-1)
  }
  return (
    <>
      
      <div className="card">
          <div>
            {/* props = properties */}
            <CounterComponent count={count} 
                              addCount={addCount}
                              minusCount={minusCount} />
          
          </div>
      </div>
      <div className="display">
        <Display count={count } 
                  addCount={addCount}
                  minusCount={minusCount} />
      </div>
              
     
    </>
  )
}


export default App

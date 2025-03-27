import "./Counter.css"
import './App.css'


export default function Counter({count, addCount, minusCount }){
    return <div className="Counter">
        {/* fragment */}
            <span>{count}</span>
            <div>
            <div className="buttons">
              <div className="buttonsClick">   
                  <button onClick={addCount}>
                    +
                  </button>
                  <button onClick={minusCount}>
                    -
                  </button>
                </div>
            </div>
        </div>
    </div>   
    
}

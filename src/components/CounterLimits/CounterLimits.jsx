import React from 'react'
import "./CounterLimits.css";

const CounterLimits = () => {

    const [count, setCount] = React.useState(0);
    const minLimit = 0;
    const maxLimit = 10;

    const handleIncrement = () => { 
        if(count < maxLimit){
            setCount(prevCount => prevCount + 1);
        }
    };

    const handleDecrement = () => {
        if(count > minLimit){
            setCount(prevCount => prevCount - 1);
        }
    };      

  return (
    <div>
      <h2>Counter Limits</h2>
      <p>Count: {count}</p>
     <button className={count === maxLimit ? 'disbledButton' : 'button'} disabled={count === maxLimit} onClick={handleIncrement}>Increment</button>
     <button className={count === minLimit ? 'disbledButton' : 'button'} disabled={count === minLimit} onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CounterLimits
import React, { useState, useEffect } from 'react'
import "./ConditionalUI.css";

const ConditionalUI = () => {
    const [status, setStatus] = React.useState('idle');

    useEffect(() => {
      if (status !== 'loading') return; // Only run when loading

      const timer = setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        console.log(isSuccess);
        setStatus(isSuccess ? 'success' : 'error');
      }, 1000);

      return () => clearTimeout(timer); // Cleanup
    }, [status]);

    const onSubmitHandler = () => {
      setStatus('loading');
    }
    
    return (
      <div className="conditionalUI">
        {status === 'idle' ? (
          <button className="button" onClick={onSubmitHandler}>Submit</button>
        ) : status === 'loading' ? (
          <p className='loading'>Loading...</p>
        ) : status === 'success' ? (
          <p className='success'>Form submitted successfully!</p>
        ) : (
          <div>
            <p className='error'>Something went wrong!</p>
            <button className="button" onClick={onSubmitHandler}>Retry</button>
          </div>
        )}
      </div>
    )
}

export default ConditionalUI
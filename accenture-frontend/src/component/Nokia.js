import React, { useState, useCallback } from 'react'
import logo from '../smartphone.png';


export default function Nokia() {

  const [message, setMessage] = useState('');
  const [convertedMsg, setConvertedMsg] = useState('');

  const getInput = useCallback((input) => {
    setMessage(`${message}${input}`);
  }, []);

  return (
    <div className="Wrapper">
      <img src={logo} className="Nokia" alt="logo" />
      <div className="Screen">
        <p className="Input">Input: {message}</p>
        Message: {convertedMsg}
      </div>
      <button className="Enter">Enter</button>
      <div className="Container">
        <div className="Row">
          <button onClick={() => getInput('1')}>1</button>
          <button onClick={() => getInput('2')}>2 <span>[abc]</span></button>
          <button onClick={() => getInput('3')}>3 <span>[def]</span></button>
        </div>
        <div className="Row">
          <button onClick={() => getInput('4')}>4 <span>[ghi]</span></button>
          <button onClick={() => getInput('5')}>5 <span>[jkl]</span></button>
          <button onClick={() => getInput('6')}>6 <span>[mno]</span></button>
        </div>
        <div className="Row">
          <button onClick={() => getInput('7')}>7 <span>[pqrs</span>]</button>
          <button onClick={() => getInput('8')}>8 <span>[tuv]</span></button>
          <button onClick={() => getInput('9')}>9 <span>[wxyx</span>]</button>
        </div>
        <div className="Row">
          <button onClick={() => getInput('*')}>* [+]</button>
          <button onClick={() => getInput('0')}>0 <span>[ _ ]</span></button>
          <button onClick={() => getInput('_')}>H <span>[#]</span></button>
        </div>
      </div>
    </div>
  )
}
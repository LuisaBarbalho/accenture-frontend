import React, { useState } from 'react'
import logo from '../smartphone.png';

import api from '../services/api';


export default function Nokia() {
  const [message, setMessage] = useState('');
  const [convertedMsg, setConvertedMsg] = useState('');

  async function handleSubmit() {
    console.log(message);
    api.get('/texto', {
      data:{"texto": {message}}
    }).then(res => {
      const convertedMsg = res.data;
      console.log(convertedMsg)
    });
  }


  return (
    <div className="Wrapper">
      <img src={logo} className="Nokia" alt="logo" />
      <div className="Screen">
        <p className="Input">Input: {message}</p>
        Message: {convertedMsg}
      </div>
      <button className="Enter" onClick={handleSubmit}>Enter</button>
      <div className="Container">
        <div className="Row">
          <button onClick={() => setMessage(prevMsg => prevMsg + '1')}>1</button>
          <button onClick={() => setMessage(prevMsg => prevMsg + '2')}>2 <span>[abc]</span></button>
          <button onClick={() => setMessage(prevMsg => prevMsg + '3')}>3 <span>[def]</span></button>
        </div>
        <div className="Row">
          <button onClick={() => setMessage(prevMsg => prevMsg + '4')}>4 <span>[ghi]</span></button>
          <button onClick={() => setMessage(prevMsg => prevMsg + '5')}>5 <span>[jkl]</span></button>
          <button onClick={() => setMessage(prevMsg => prevMsg + '6')}>6 <span>[mno]</span></button>
        </div>
        <div className="Row">
          <button onClick={() => setMessage(prevMsg => prevMsg + '7')}>7 <span>[pqrs</span>]</button>
          <button onClick={() => setMessage(prevMsg => prevMsg + '8')}>8 <span>[tuv]</span></button>
          <button onClick={() => setMessage(prevMsg => prevMsg + '9')}>9 <span>[wxyx</span>]</button>
        </div>
        <div className="Row">
          <button onClick={() => setMessage(prevMsg => prevMsg + '*')}>* [+]</button>
          <button onClick={() => setMessage(prevMsg => prevMsg + ' ')}>0 <span>[ _ ]</span></button>
          <button onClick={() => setMessage(prevMsg => prevMsg + 'H')}>H <span>[#]</span></button>
        </div>
      </div>
    </div>
  )
}
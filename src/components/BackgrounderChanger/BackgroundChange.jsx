import React, { useState } from 'react'
import './changer.css'

const Background = () => {

  const [changer, setChanger] = useState('#f0f0f0')

  const handelChange = (e) => {
    const name = e.target.name;

    if (name === 'red') {
      return setChanger('#ff0000');
    } else if (name === 'yellow') {
      return setChanger('#ffff00');
    } else if (name === 'green') {
      return setChanger('#00ff00');
    } else if (name === 'blue') {
      return setChanger('#0000ff');
    } else if (name === 'purple') {
      return setChanger('#800080');
    } else if (name === 'black') {
      return setChanger('#000000');
    } else  {
      return setChanger('#' + Math.floor(Math.random()*16777215).toString(16))
    }
  }

  return (
    <div className='container' style={{ backgroundColor: changer }}>
      <div className='buttons'>
        <button name="red" className='red' onClick={handelChange}>Red</button>
        <button name="yellow" className='yellow' onClick={handelChange}>Yellow</button>
        <button name="black" className='black' onClick={handelChange}>Black</button>
        <button name="purple" className='purple' onClick={handelChange}>Purple</button>
        <button name="green" className='green' onClick={handelChange}>Green</button>
        <button name="blue" className='blue' onClick={handelChange}>Blue</button>
        <button name="default" className='default' onClick={handelChange}>Default</button>
      </div>
    </div>
  )
}

export default Background
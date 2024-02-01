import React, { useState } from 'react'
import './calculator.css'

const Calculator = () => {
    const [input , setInput] = useState('');
    const [result, setResult] = useState('');

    const handelClick = (value) => {

        if(value === '='){
          try {
            setResult(eval(input).toString()); 
          } catch (error) {
             setResult('Error');
          }
        } else if(value === 'c') {
          
            setInput(input.slice(0,-1));

        } else if(value === 'ac') {
           
            setInput('');
            setResult('');
        
        }else {
            setInput((prevInput) => {
                return  prevInput + value;
            })
        }
    }

  return (
    <>
    <div className='calculator'>
    <h1>Let's Calculate</h1>
      <div className='content'>
      <div className='display'>
         <div className='input'>{input}</div>
         <div className='result'>{result}</div>
       </div>
          <button className='btn' onClick={(e)=>handelClick('1')}>1</button>
          <button className='btn' onClick={(e)=>handelClick('2')}>2</button>
          <button className='btn' onClick={(e)=>handelClick('3')}>3</button>
          <button className='btn' onClick={(e)=>handelClick('+')}>+</button>

          <button className='btn' onClick={(e)=>handelClick('4')}>4</button>
          <button className='btn' onClick={(e)=>handelClick('5')}>5</button>
          <button className='btn' onClick={(e)=>handelClick('6')}>6</button>
          <button className='btn' onClick={(e)=>handelClick('-')}>-</button>

          <button className='btn' onClick={(e)=>handelClick('7')}>7</button>
          <button className='btn' onClick={(e)=>handelClick('8')}>8</button>
          <button className='btn' onClick={(e)=>handelClick('9')}>9</button>
          <button className='btn' onClick={(e)=>handelClick('/')}>/</button>

          <button className='btn' onClick={(e)=>handelClick('0')}>0</button>
          <button className='btn' onClick={(e)=>handelClick('.')}>.</button>
          <button className='btn' onClick={(e)=>handelClick('=')}>=</button>
          <button className='btn' onClick={(e)=>handelClick('*')}>*</button>

          <button className='btn' onClick={(e)=>handelClick('c')}>C</button>
          <button className='btn' onClick={(e)=>handelClick('ac')}>AC</button>
      </div>
    </div>
   </>
  )
}

export default Calculator
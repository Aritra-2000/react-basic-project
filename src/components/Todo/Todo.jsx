import React, { useState } from 'react'
import './todo.css'

const Todo = () => {

    const [input, setInput] = useState({
        title: "",
        description: "",
    });
    const [addnotes, setAddnotes] = useState([]);

    const handelChange = (e) => {

        const { name, value } = e.target;

        if (name === 'title') {
            setInput((prevValue) => {
                return {
                    ...prevValue,
                    title: value
                }
            })
        } else {

            setInput((prevValue) => {
                return {
                    ...prevValue,
                    description: value
                }
            })
        }
    }

    const handelClick = () => {

        const newNote = {
            title: input.title,
            description: input.description,
        }

        setAddnotes((prevValue) => {
            return [...prevValue, newNote]
        });

        setInput({
            title: "",
            description: "",
        })
    }

    const deleteNote = (id) => {
        setAddnotes((prevValue) => {
            return prevValue.filter((note, index) => {
                return id != index;
            })
        })
    }

    return (
        <div className='para'>
            <h1 className='heading'>Todo List</h1>
            <div className='todo'>
                <input type="text" placeholder='Enter the title' name='title' onChange={handelChange} value={input.title} />
                <input type="text" placeholder='Enter the description' name='description' onChange={handelChange} value={input.description} />
                <button className='btn-todo' onClick={handelClick}>ADD</button>
            </div>
            <div className='todos'>
                {addnotes.map((note, index) => {
                    return (
                        <div key={index} id={index} className='addTodo'>
                            <h2>{note.title}</h2>
                            <p>{note.description}</p>
                            <button className='btn-todo' onClick={() => deleteNote(index)}>Delete</button>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Todo
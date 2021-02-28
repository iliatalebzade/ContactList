import React from 'react'
import closeBtn from './assets/x.png';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {contactAdder} from '../redux/userStates/action'


const AddTodoForm=({active, activeToggle})=> {
    
    const [content, setContent] = useState({
        name: '',
        number: '',
    })

    const nameChangeHandler = (e) => {
        setContent({
            ...content,
            name: e.target.value,
        })
    }

    const numberChangeHandler = (e) => {
        setContent({
            ...content,
            number: e.target.value,
        }) 
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(content.name !== '' && content.number !== ''){
            dispatch(contactAdder(content))
            alert('contact created successfully!')
        }else if(content.name == '' && content.number == ''){
            alert('number and name fileds are required')
        }
        else if(content.name == ''){
            alert('name filed is required')
        }else if(content.number == ''){
            alert('number filed is required')
        }
    }


    const dispatch = useDispatch()


    return (
        <div className={active ? 'addForm' : 'notActiveForm'}>
            <h3>Create New Contact</h3>
            
            
            <form onSubmit={submitHandler}>
                <input name="name" onChange={nameChangeHandler} value={content.name} type="text" placeholder="Name"/>
                <input name="number" onChange={numberChangeHandler} value={content.number} type="text" placeholder="Number"/>
                <input type="submit" value="Create"/>
            </form>


            <span className="closeBtnParent" onClick={activeToggle}>
                <span className="closeBtn">+</span>
            </span>
        </div>
    )
}

export default AddTodoForm
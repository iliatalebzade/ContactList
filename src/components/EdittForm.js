import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { contactEditter, edittFormToggler } from '../redux/userStates/action'

const EdittForm = (props) => {

    const dispatch = useDispatch()

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

    const edditSubmitHandler=(e)=>{
        e.preventDefault();
        if(content.name !== '' && content.number !== ''){
            dispatch(contactEditter(content, props.index))
            alert('contact created successfully!')
        }else if(content.name === '' && content.number === ''){
            alert('number and name fileds are required')
        }
        else if(content.name === ''){
            alert('name filed is required')
        }else if(content.number === ''){
            alert('number filed is required')
        }
    }

    return (
        <div className="selectListActive">
            <h3>Edit the selcted Item</h3>
            <form onSubmit={edditSubmitHandler}>
                <input type="text" placeholder="Name" onChange={nameChangeHandler}/>
                <input type="text" placeholder="Number" onChange={numberChangeHandler}/>
                <input type="submit"/>
            </form>

            <span className="editCloseBtnParent" onClick={()=> dispatch(edittFormToggler(props.index))}>
                <span className="editCloseBtn">+</span>
            </span>
        </div>
    )
}

export default EdittForm

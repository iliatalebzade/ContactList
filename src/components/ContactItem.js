import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { contactDeletter, favoriteAdder, edittFormToggler } from '../redux/userStates/action'
import heart from './assets/heart.png'
import filledHeart from './assets/filledheart.png'
import EdittForm from './EdittForm'

const ContactItem = (props) => {

    const [activision, setActivision] = useState(false)

    const activeToggle =()=> {
        setActivision(prev => !prev)
    }

    const dispatch = useDispatch()

    return (
        <div className='contactItem'>

            {/* for edit mode */}
            {props.bingEdited &&
                <EdittForm index={props.index} activeToggle={activeToggle}/>
            }

            {/* for display mode */}
            {!props.bingEdited &&
                <>
                    <ul>
                        <li><span>Name: </span>{props.name}</li>
                        <li><span>Number: </span>{props.number}</li>
                    </ul>
                    <div className="btngroup">
                        <button onClick={()=> dispatch(contactDeletter(props.index))}>Delete</button>
                        <button onClick={()=> dispatch(edittFormToggler(props.index))}>Edit</button>
                    </div>

                    {/* for unfilled heart */}
                    {!props.fav &&
                        <div className="Heart">
                            <img src={heart} onClick={()=> dispatch(favoriteAdder(props.index))} alt=""/>
                        </div>
                    }

                    {/* for filled heart */}
                    {props.fav &&
                        <div className="Heart">
                            <img src={filledHeart} onClick={()=> dispatch(favoriteAdder(props.index))} alt=""/>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default ContactItem;
import React, { useState } from 'react'
import ContactItem from './ContactItem'
import Addbtn from './Addbtn'

import {useSelector} from 'react-redux'

const FavContacts = () => {
    
    const userList = useSelector(state => state.users)
    const [numOfFavs, setNumOfFavs] = useState(0)
    

    const favChecke = (item) => item.fav === true 

    return (
        <div className="AllContacts">
            {userList.length > 0 &&
                userList.map((item, index) => {
                    if (item.fav) {
                        return <ContactItem name={item.name} fav={item.fav} number={item.number} key={index} index={index} bingEdited={item.bingEdited}/>
                    }
                })
            }
            {userList.some(favChecke) === false &&
                <div className="emptyInfo">
                <h2>No Favorite Contacts :(</h2>
                <p>Try adding some!</p>
                </div>
            }
            <Addbtn />
        </div>
    )
}

export default FavContacts

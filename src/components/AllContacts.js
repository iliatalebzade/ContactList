import React from 'react'
import ContactItem from './ContactItem'
import Addbtn from './Addbtn'

import {useSelector} from 'react-redux'

const AllContacts = () => {

    const userList = useSelector(state => state.users)

    return (
        <div className="AllContacts">
            {userList.length > 0 &&
                userList.map((item, index) => (
                <ContactItem name={item.name} fav={item.fav} number={item.number} key={index} index={index} bingEdited={item.bingEdited}/>
                ))
            }
            {userList.length <= 0 &&
                <div className="emptyInfo">
                <h2>Nothing to show :(</h2>
                <p>Try adding some!</p>
                </div> 
            }
            <Addbtn />
        </div>
    )
}

export default AllContacts

import React, {useState} from 'react'
import AddTodoForm from './AddTodoForm';

const Addbtn = () => {

    const [activision, setActivision] = useState(false)

    const activeToggle =()=> {
        setActivision(prev => !prev)
    }

    return (
        <>
          <div onClick={activeToggle} className='addBtn'>
            <span>+</span>
          </div>
          <AddTodoForm active={activision} activeToggle={activeToggle}/>
        </>
    )
}


export default Addbtn;
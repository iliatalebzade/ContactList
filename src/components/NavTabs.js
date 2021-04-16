import React from 'react'

const NavTabs = ({ tabCon, setTabCon }) => {
    return (
        <div>
            <button onClick={() => setTabCon(true)} className={tabCon ? 'ActiveBtn' : 'DeactiveBtn'}>All Contacts</button>
            <button onClick={() => setTabCon(false)} className={tabCon ? 'DeactiveBtn' : 'ActiveBtn'}>Favorite Contacts</button>
        </div>
    )
}

export default NavTabs

import './App.css'
import { useState } from 'react'
import AllContacts from './components/AllContacts';
import FavContacts from './components/FavContacts';
import NavTabs from './components/NavTabs';

const App = () => {

  const [tabCon, setTabCon] = useState(true)

  return (
    <div className="App">
      <h1>Contacts</h1>
      <NavTabs
        tabCon={tabCon}
        setTabCon={setTabCon}
      />
      {tabCon  === true &&
        <AllContacts />
      }
      {tabCon  === false &&
        <FavContacts />
      }
    </div>
  );
}

export default App;

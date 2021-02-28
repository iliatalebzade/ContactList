import './App.css'
import {useSelector} from 'react-redux'
import ContactItem from './components/ContactItem'
import Addbtn from './components/Addbtn'


const App = () => {

  const userList = useSelector(state => state.users)

  return (
    <div className="App">
      <h1>Contacts</h1>
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
  );
}

export default App;

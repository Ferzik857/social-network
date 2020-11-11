import logo from './logo.svg';
import './App.css';
import Header from './components/Heder/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props)=> {
 

  return (
    <BrowserRouter>
    <div className="app-warpper">
<Header/>
<Navbar/>
<div className="app-warpper-content">
  <Route path="/Profile" render={() => <Profile PostData={props.PostData}/>}/>
  <Route path="/Dialogs" render={() => <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>
  <Route path="/News" render={News}/>
  <Route path="/Music" render={Music}/>
  <Route path="/Settings" crender={Settings}/>
</div>
    </div>
    </BrowserRouter>
  );
}



export default App;

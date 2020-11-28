import logo from './logo.svg';
import './App.css';
import Header from './components/Heder/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';

const App = (props)=> {
 
  return (
    <BrowserRouter>
    <div className="app-warpper">
<Header/>
<Navbar/>
<div className="app-warpper-content">
  <Route path="/Profile" render={() => <Profile />}/>
  <Route path="/Dialogs" render={() => <DialogsContainer />}/>
  <Route path="/News" render={News}/>
  <Route path="/Music" render={Music}/>
  <Route path="/Settings" render={Settings}/>
  <Route path="/Friends" render={Friends}/>
  <Route path="/users" render={() => <Users />}/>
    </div>
    </div>
    </BrowserRouter>
  );
}



export default App;

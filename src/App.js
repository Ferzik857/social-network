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

const App = ()=> {
  return (
    <BrowserRouter>
    <div className="app-warpper">
<Header/>
<Navbar/>
<div className="app-warpper-content">
  <Route path="/Profile" component={Profile}/>
  <Route path="/Dialogs" component={Dialogs}/>
  <Route path="/News" component={News}/>
  <Route path="/Music" component={Music}/>
  <Route path="/Settings" component={Settings}/>
</div>
    </div>
    </BrowserRouter>
  );
}



export default App;

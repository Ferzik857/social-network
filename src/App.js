import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileCountainer from './components/Profile/ProfileCountainer';
import HeaderContainer from './components/Heder/HeaderContainer';
import Login from './components/login/login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {
  componentDidMount(){ 
    this.props.initializeApp() }
render(){
  if (!this.props.initialized){
  return <Preloader />}
  return (
   
    <div className="app-warpper">
<HeaderContainer/>
<Navbar/>
<div className="app-warpper-content">
  <Switch>
  <Route exact path="/" render= {() => <Redirect to={'/profile'}/>}/>
  <Route path="/login" render={() => <Login />}/>
  <Route path="/Profile/:userId?" render={() => <ProfileCountainer />}/>
  <Route path="/Dialogs" render={() => <DialogsContainer />}/>
  <Route path="/News" render={News}/>
  <Route path="/Music" render={Music}/>
  <Route path="/Settings" render={Settings}/>
  <Route path="/Friends" render={Friends}/>
  <Route path="/users" render={() => <UsersContainer pageTitle={"title"}/>}/>
 </Switch>
    </div>
    </div>
   
  );
}
}

const mapStateToProps =(state) => ({initialized: state.app.initialized})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

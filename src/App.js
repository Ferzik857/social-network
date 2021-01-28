import './App.css';
import {Link, NavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileCountainer from './components/Profile/ProfileCountainer';
import Login from './components/login/login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { UsersPage } from './components/Users/UsersContainer';
import "antd/dist/antd.css"
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Header } from './components/Heder/Header';
import ChatPage from './pages/Chat/ChatPage';


const { SubMenu } = Menu;
const {  Content, Footer, Sider } = Layout;






class App extends Component {
  componentDidMount(){ 
    this.props.initializeApp() }
render(){
  if (!this.props.initialized){
  return <Preloader />}
  return (
    <Layout>
    <Header />
    
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
           // defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
              <Menu.Item key="1"><Link to="/Profile" >Profile</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/Dialogs">Messages</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/News" >News</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/Music">Music</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5"><Link to="/Settings">Settings</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/Friends">Friends</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/Users" >Users</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/Chat" >Chat</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Switch>
  <Route exact path="/" render= {() => <Redirect to={'/profile'}/>}/>
  <Route path="/login" render={() => <Login />}/>
  <Route path="/Profile/:userId?" render={() => <ProfileCountainer />}/>
  <Route path="/Dialogs" render={() => <DialogsContainer />}/>
  <Route path="/News" render={News}/>
  <Route path="/Music" render={Music}/>
  <Route path="/Settings" render={Settings}/>
  <Route path="/Friends" render={Friends}/>
  <Route path="/users" render={() => <UsersPage pageTitle={"title"}/>}/>
  <Route path="/Chat" render={ChatPage}/>
 </Switch></Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ferzik@Prodakchen</Footer>
  </Layout>
  );
}
}

const mapStateToProps =(state) => ({initialized: state.app.initialized})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

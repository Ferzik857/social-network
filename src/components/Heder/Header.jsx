import { NavLink, Link } from 'react-router-dom'
import  b from './Header.module.css'
import { Button, Col, Row } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectCurrentUserLogin } from '../../redux/auth-selectors';
import { logout } from '../../redux/auth-reduser';

export const Header = (props) => {

const isAuth = useSelector(selectIsAuth)
const login = useSelector(selectCurrentUserLogin)
const dispatch = useDispatch()
const logoutCallback = ()=> {
    dispatch(logout())
}

    const { Header } = Layout;
    return  <Header className="header">
    <div className="logo" />
    <Row>
      <Col span={18}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1"><Link to="/Users" >Developers</Link></Menu.Item>
      </Menu> 
      </Col>
      
      {isAuth 
      ?<> <Col span={1}>
          <Avatar alt={login || ""} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Col>
      <Col span={5}>
       <Button onClick={logoutCallback}>log out</Button> 
      </Col>
      </>
      :<Col span={6}>
      <Button>
      <Link to={"/login"}>Login</Link>
      </Button>
      </Col>}
    </Row>
   

  </Header>
    
    
    
    
    
    
    
    
    
    
   /* <header className={b.header}>
    <img src="https://www.clipartmax.com/png/full/220-2205004_gallery-of-free-logo-maker-design-with-jeta-software-free-3d-logo.png" />
  <div className ={b.loginBlock}>
      {props.isAuth 
      ?<div>{props.login} - <button onClick={props.logout}>log out</button> </div>
      :<NavLink to={"/login"}>Login</NavLink> }
      
  </div>
   </header>*/
}



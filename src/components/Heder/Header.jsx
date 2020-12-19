import { NavLink } from 'react-router-dom'
import  b from './Header.module.css'

const Header = (props) => {
    return <header className={b.header}>
    <img src="https://www.clipartmax.com/png/full/220-2205004_gallery-of-free-logo-maker-design-with-jeta-software-free-3d-logo.png" />
  <div className ={b.loginBlock}>
      {props.isAuth ? props.login:<NavLink to={"/login"}>Login</NavLink> }
      
  </div>
   </header>
}

export default  Header;

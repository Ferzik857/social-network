import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}><NavLink to="/Profile" activeClassName={s.activ}>Profile</NavLink></div>
    <div className={s.item}><NavLink to="/Dialogs"activeClassName={s.activ}>Messages</NavLink></div>
    <div className={s.item}><NavLink to="/News" activeClassName={s.activ}>News</NavLink></div>
    <div className={s.item}><NavLink to="/Music" activeClassName={s.activ}>Music</NavLink></div>
    <div className={s.item}><NavLink to="/Settings" activeClassName={s.activ}>Settings</NavLink></div>
    <div className={s.item}><NavLink to="/Friends" activeClassName={s.activ}>Friends</NavLink></div>
    <div className={s.item}><NavLink to="/Users" activeClassName={s.activ}>Users</NavLink></div>
    </nav>
}

export default  Navbar;

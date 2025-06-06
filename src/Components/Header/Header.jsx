import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <span>My website</span> <br />
                <Link to='/'>Home</Link>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>


            </nav>
        </div>
    );
};

export default Header;
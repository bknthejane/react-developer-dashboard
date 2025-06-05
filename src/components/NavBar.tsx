import styles from '../css/NavBar.module.css';
import  { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <a href='/' className='site-title'>
                    GitHub Dashboard
                </a>
                <ul>
                    <li>
                        <Link to='/favorites'>Favourites</Link>
                    </li>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
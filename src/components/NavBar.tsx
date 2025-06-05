import styles from '../css/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <a href='/'>
                    GitHub Dashboard
                </a>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <Link to='/favorites'>Favourites</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
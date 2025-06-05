import styles from '../css/NavBar.module.css';

const NavBar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <a href='/' className='site-title'>
                    GitHub Dashboard
                </a>
                <ul>
                    <li>
                        <a href='/favorites'>Favorites</a>
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
import { NavLink } from 'react-router';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo}>moviebox</NavLink>
        
        <div className={styles.links}>
          <NavLink 
            to="/"
            end
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/movies/new"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Adicionar filme
          </NavLink>
        </div>
        
        <form className={styles.search}>
          <label htmlFor="busca" className={styles.srOnly}>Buscar filme</label>
          <input id="busca" type="search" placeholder="Buscar" className={styles.input}/>
        </form>
      </nav>
    </header>
  );
}
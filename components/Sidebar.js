import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Sidebar = () => {
  return (
    <>
      <nav className={styles.sidebar}>
        <Link href='/'>
          <a className={styles.sidebarButton}>Home</a>
        </Link>
        <Link href='/chats'>
          <a className={styles.sidebarButton}>Chats</a>
        </Link>
        <Link href='/'>
          <a className={styles.sidebarButton}>Email</a>
        </Link>
        <Link href='/'>
          <a className={styles.sidebarButton}>FB & IG</a>
        </Link>
        <Link href='/'>
          <a className={styles.sidebarButton}>Yelp</a>
        </Link>
        <Link href='/'>
          <a className={styles.sidebarButton}>Settings</a>
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;

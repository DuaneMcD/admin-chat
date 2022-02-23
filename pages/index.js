import Head from 'next/head';
import Sidebar from '../components/sidebar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Admin Panel</title>
        <meta name='description' content='Admin Panel by Duane McDonald' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.mainContainer}>
          <Sidebar />
          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to your Admin Panel!</h1>

            <p className={styles.description}>
              Get started by editing checking your messages in {`'Chats'`}
            </p>
          </main>
        </div>
        <footer className={styles.footer}>
          <p>Powered by Duane</p>
        </footer>
      </div>
    </>
  );
}

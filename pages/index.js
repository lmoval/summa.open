import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Search from '../comps/Search';

export default function Home() {
  return (
    <>
      <Head>
        <title> Summa | Homepage</title>
        <meta name="keywords" content="Summa Running" />
      </Head>
      <div className={styles.title}>
        <h1>Discover your next running experience</h1>
      </div>
      <Search />
    </>
  )
};

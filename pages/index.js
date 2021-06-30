import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import styles from '../styles/Home.module.css';
import Search from '../comps/Search';

export default function Home() {
  return (
    <>
      <title> Summa | Homepage
        <meta name="keywords" content="Summa Running" />
      </title>
      <div className={styles.title}>
        <h1>Discover your next running experience</h1>
      </div>
      <Search />
    </>
  )
};
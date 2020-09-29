import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Present List</title>
      </Head>
      <h1 className={styles.title}>Alex's Present List</h1>
      <p className={styles.footer}><Link href="/admin/homepage"><a>Admin Page</a></Link></p>
    </>
  )
}
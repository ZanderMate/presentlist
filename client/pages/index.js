import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../components/layout.module.css';
const axios = require('axios');

const Home = props => {
  const [presentList, setPresentList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/api/presents/")
      .then(results => {
        console.log(results);
      })
  }, []);

  return (
    <Layout>
      <Head>
        <title>Present List</title>
      </Head>
      <h1 className={styles.title}>A List of Possible Presents for Alex</h1>
    </Layout>
  )
}

export default Home;
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../components/layout.module.css';
import Table from '../components/table';
const axios = require('axios');

class Home extends React.Component {
  state = {
    data: ""
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/presents/")
      .then(results => {
        console.log(results.data);
        this.setState({ data: results.data });
        console.log(this.state.data);
      })
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Present List</title>
        </Head>
        <h1 className={styles.title}>A List of Possible Presents for Alex</h1>
        <Table
          results={this.state.data} />
      </Layout>

    )
  }
}

export default Home;
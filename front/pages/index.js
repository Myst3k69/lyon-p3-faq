import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Footer/>
    </div>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>      
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>bla bla fdsfdsf kjdsölfkjdslfköjdsafijdasölkfjdsaölfk jsalkf sfd sjafk ldösa fd asfd dsa fdsa fdsa   </p>
        <p className={styles.text}>bla bla fdsfdsf kjdsölfkjdslfköjdsafijdasölkfjdsaölfk jsalkf sfd sjafk ldösa fd asfd dsa fdsa fdsa   </p>
        <Link href="/ninjas" className={styles.btn}> See Ninja Listing</Link>
      </div>  
    </>  
  )
}

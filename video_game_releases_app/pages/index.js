import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Games from './games'

export default function Home() {
  return (
    <div className={styles.container}>
      <Games />
    </div>
  )
}


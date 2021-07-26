import Head from 'next/head'
import axiosWithAuth from "../Utils/axiosWithAuth"
import styles from '../styles/Home.module.css'
import Games from './games'

export default function Home({dates}) {
  console.log(dates)
  return (
    <div className={styles.container}>
      <Games />
    </div>
  )
}


export const getStaticProps = async () => {  
  let res = "nothing"

  await axiosWithAuth()
  .post("/release_dates")
  .then((response) => {
    console.log("Release Dates", response)
    res = response.data
  })

  const dates = await res

  return {
    props: {
      dates
    }
  }
}
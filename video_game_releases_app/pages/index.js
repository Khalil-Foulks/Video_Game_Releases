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
  let res = []
  const bodyQuery = 'fields *; where y = 2020; sort date asc; limit 500;'

  await axiosWithAuth()
  .post("/release_dates", bodyQuery)
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
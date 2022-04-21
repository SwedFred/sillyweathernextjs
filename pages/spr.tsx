import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { DataAndImage } from '../components/dataimage'
import { WeatherData, WeatherDescription } from '../data/weatherdata'
import { GenerateWeatherDescriptions } from '../helpers/generateweatherdescription'
import styles from '../styles/Home.module.css'

const GenerateWeather = (weather: WeatherData) => {
  console.log("generate weather")
  const descriptions: WeatherDescription[] = GenerateWeatherDescriptions(weather);
  return descriptions.map((x,i) => {return <DataAndImage key={i} weatherdesc={x}/>})
}

const Home: React.FC<WeatherData> = (props) => {
  const [weather, setWeather] = useState<WeatherData | undefined>(undefined);

  useEffect(() => {
    setWeather(props);
  },[])


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>This page uses Static Site Generation</p> 
      <div className={styles.weathercontainer}>
        { weather ? GenerateWeather(weather) : <span/>}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const weather = await new WeatherData(25, 2, 7, 0, 1);
  console.log("get static props")
  return { props: {...weather}};
}

export default Home

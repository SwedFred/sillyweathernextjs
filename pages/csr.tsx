import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { DataAndImage } from '../components/dataimage'
import { WeatherData, WeatherDescription } from '../data/weatherdata'
import { GenerateWeatherDescriptions } from '../helpers/generateweatherdescription'
import { GenerateWeatherData } from '../services/weatherservice'
import styles from '../styles/Home.module.css'

const Home: React.FC<WeatherData> = (props) => {
  const [weather, setWeather] = useState<WeatherData | undefined>(undefined);

  useEffect(() => {
    const tmpWeather = GenerateWeatherData();
    setWeather(tmpWeather);
  },[])
  
    const GenerateWeather = (weather: WeatherData) => {
    const descriptions: WeatherDescription[] = GenerateWeatherDescriptions(weather);
    return descriptions.map((x,i) => {return <DataAndImage key={i} weatherdesc={x}/>})
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>This page uses Client Side Rendering</p> 
      <div className={styles.weathercontainer}>
        {weather ? GenerateWeather(weather) : <span/>}
      </div>
    </div>
  )
}

export default Home

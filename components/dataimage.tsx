import Image from 'next/image';
import React from 'react'
import { WeatherDescription } from "../data/weatherdata";
import styles from '../styles/dataimage.module.css'

export const DataAndImage = ({weatherdesc}: any) => {
    const isEmpty: boolean = (weatherdesc.description === '' && weatherdesc.imagepath === '')
    
    return (
        <div className={isEmpty ? styles.hidden : styles.container}>
            <div className={styles.imagecontainer}>
                { weatherdesc.imagepath !== '' ? <Image className={styles.image} src={`/${weatherdesc.imagepath}.svg`} alt={weatherdesc.imagepath} height={100} width={100}/> : <span/> }
            </div>
            <div className={styles.textcontainer}>
                <p className={styles.text}>{weatherdesc.description}</p>
            </div>
        </div>
    )
}
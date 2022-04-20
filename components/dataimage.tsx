import Image from 'next/image';
import React from 'react'
import { WeatherDescription } from "../data/weatherdata";
import styles from '../styles/dataimage.module.css'

export const DataAndImage = ({weatherdesc}: any) => {
    const isEmpty = weatherdesc.description === '' && weatherdesc.imagepath === ''
    return (
        <div className={isEmpty ? styles.hidden : styles.container}>
            <Image className={styles.image} src={`/${weatherdesc.imagepath}.svg`} alt={weatherdesc.imagepath} height={100} width={100}/>
            <p className={styles.text}>{weatherdesc.description}</p>
        </div>
    )
}
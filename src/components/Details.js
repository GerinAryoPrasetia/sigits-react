import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import styles from '../css/Details.module.css'
import CerahBerawan from '../img/cerah-berawan.png'
import Kelembabpan from '../img/ic-humidity.png'
import Wind from '../img/ic-wind.png'
import River from '../img/ic-river.png'

const lat = -7.335555;
const lon = 108.186019;
const apiKey = process.env.WEATHER_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-7.335555&lon=108.186019&appid=640ffe65ea6591cfce691caa8a9d4a44&units=metric&lang=id'

const Details = () => {
    const [weatherData, setWeatherData] = useState({});
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0)
    const [desc, setDesc] = useState('')

    useEffect(() => {
        try {
            // console.log('try');
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    setWeatherData(data);
                    setTemp(data.main.temp);
                    setHumidity(data.main.humidity);
                    setWind(data.wind.speed);
                    setDesc(data.weather[0].description)
                });
        } catch (err) {
            console.log('ini error', err)
        }
    }, [])

    return (
        <div>
            <div className={styles.detailsWrapper}>
                <div className={styles.cuacaWrapper}>
                    <div className={styles.cuaca} style={{ marginBottom: '20px' }}>
                        <img src={CerahBerawan} alt="ic-cloud" className={styles.cerahBerawan} />
                        <h2 className={styles.tempCuaca}>{temp}°C</h2>
                    </div>
                    <h3>{desc}</h3>
                </div>
                <div className={styles.humidity}>
                    <img src={Kelembabpan} alt="ic-cloud" />
                    <p style={{ marginBottom: '20px' }}>Kelembaban</p>
                    <h2 className={styles.humDetails}>{humidity}°C</h2>
                </div>
                <div className={styles.wind}>
                    <img src={Wind} alt="ic-cloud" />
                    <p style={{ marginBottom: '20px' }}>Kecepatan Angin</p>
                    <h2 className={styles.windDetails}>{wind} m/detik</h2>
                </div>
                <div className={styles.waterHeight}>
                    <img src={River} alt="ic-cloud" />
                    <p style={{ marginBottom: '20px' }}>Ketinggian Air</p>
                    <h2 className={styles.waterDetails}>{humidity}°C</h2>
                </div>
            </div>
        </div>
    )
}

export default Details

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css'

const Graph = () => {
    const [chartData, setChartData] = useState({})
    const [tinggiAir, setTinggiAir] = useState([]);

    const chart = () => {
        let tinggiA = []
        let tanggal = []
        axios.get("https://api.thingspeak.com/channels/1566932/feeds.json?results=1")
            .then(res => {
                // console.log(res);
                for (const dataObj of res.data.feeds) {
                    tinggiA.push(parseInt(dataObj.field1))
                    tinggiA.push(20)
                    tanggal.push(200)
                    tanggal.push(dataObj.created_at)
                }
                setChartData({
                    labels: tanggal,
                    datasets: [
                        {
                            label: "Monitoring Tinggi Danau Situ Gede",
                            data: tinggiA,
                            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                            borderWidth: 4
                        }
                    ]
                });
            })
            .catch(err => {
                console.log(err);
            })
        console.log("tinggiA", tinggiA);
        console.log("updatedAt", tanggal);
    }

    useEffect(() => {
        chart();
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div>
                <h1>Monitoring Danau Situgede</h1>
            </div>
            {/* <Line
                data={chartData}
                options={{
                    responsive: true,
                    title: { text: "THICCNESS SCALE", display: true },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    }
                }}
            /> */}
            <iframe style={{ border: "1px solid #cccccc", width: "450px", height: "260px" }} src="https://thingspeak.com/channels/1566932/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
            <p style={{ textAlign: "center" }}>Sumber air pada danau situgede dipasok dari sungai yang terdapat di Kabupaten Tasikmalaya yang mengalir melewati beberapa daerah dan dijadikan sumber irigasi persawahan yang dilewati sungai ini</p>
            <Link to='/'><button className={styles.btnDetail}>Kembali ke Home</button></Link>
        </div>
    )
}

export default Graph

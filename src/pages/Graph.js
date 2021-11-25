import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

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
        <div>
            <Line
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
            />
        </div>
    )
}

export default Graph

import React, { useState, useEffect } from 'react'

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);

    const dateBuilder = (d) => {
        let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"];
        let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

        let day = days[d.getDay() - 1];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`
    }

    return (
        <div style={{ textAlign: 'start' }}>
            <p style={{ fontSize: '30px' }}>
                {date.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: '2-digit',
                    hour12: false,

                })}
            </p>
            <div>{dateBuilder(new Date())}</div>
        </div>
    )
}

export default Clock

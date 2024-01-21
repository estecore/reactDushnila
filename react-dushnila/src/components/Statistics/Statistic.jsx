import './Statistic.css';
import React, { useState, useEffect } from 'react';

export default function Statistic(){
    
    const [stat, setStat] = useState({}); 

    const gettingAp = async (e) => {
        const api_url = await fetch(`http://dushnila.gooddelo.com/data`).then((api_url) => api_url.json());
        setStat(api_url);
    }

        useEffect(() => {
            gettingAp();
          }, []);
        setInterval(() => gettingAp(),60000);    

    const isComfort = +(stat.temp) > 27 || +(stat.co2) > 800;

        return (
            <div className={ isComfort ? "statistic uncomfortable" : 'statistic' }>
                <p className='stat'>{`${Math.round(stat.temp * 10)/10} ℃`}</p>
                <p className='stat-text'>Температура</p>
                <p className='stat'>{`${Math.round(stat.co2)} ppm`}</p>
                <p className='stat-text'>CO2</p>
            </div>
        );
    // }
}

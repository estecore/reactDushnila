import './Statistic.css';
import '../Emotion/Emotion.css';
import React, { useState, useEffect } from 'react';


export function Comfort() {
        const [stat, setStat] = useState({});
    const gettingAp = async (e) => {
        const api_url = await fetch(`http://dushnila.gooddelo.com/data`).then((api_url) => api_url.json());
        setStat(api_url);
    }

    useEffect(() => {
        gettingAp()
        }, []);
    setInterval(() => gettingAp(),10000);

    function isComfort() { 
        if (stat.temp > 27 || stat.co2 > 800) {
            return true;
        } else {
            return false;
        }
    }

    return ({'isComfort':isComfort(), 'temp':stat.temp, 'co2':stat.co2})
}

export function Emotion() {

    return (
        <div className={Comfort().isComfort ? 'emotion uncomfortable' : 'emotion'}>
            <p className='emotion__text'>Душнила {Comfort().isComfort ? 'не' : ''} доволен вами</p>
            <p className='emotion__text-norm'>{Comfort().isComfort ? 'Показатели выше нормы!' : 'Все показатели в норме'}</p>
        </div>
    )
}


export default function Statistic(){
    
    // const [stat, setStat] = useState({}); 

    // const gettingAp = async (e) => {
    //     const api_url = await fetch(`http://dushnila.gooddelo.com/data`).then((api_url) => api_url.json());
    //     setStat(api_url);
    // }

    //     useEffect(() => {
    //         gettingAp();
    //       }, []);
    //     setInterval(() => gettingAp(),60000);

    // const isComfort = +(stat.temp) > 27 || +(stat.co2) > 800;

        return (
            <div className={ Comfort().isComfort ? "statistic uncomfortable" : 'statistic' }>
                <p className='stat'>{`${Math.round(Comfort().temp * 10)/10} ℃`}</p>
                <p className='stat-text'>Температура</p>
                <p className='stat'>{`${Math.round(Number(Comfort().co2))} ppm`}</p>
                <p className='stat-text'>CO2</p>
            </div>
        );
    // }
}

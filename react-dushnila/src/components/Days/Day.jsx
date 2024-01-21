import './Day.css';

export default function Day(){
    return (

        <div className='days'>
            <p className='days__text'>Дней без душноты {Math.round(Math.random()*10)}</p>
            <button className='btn__days'>История</button>
        </div>

    );
}
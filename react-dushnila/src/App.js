import Emotion from './components/Emotion/Emotion';
import Day from './components/Days/Day';
import Logo from './components/Logo/Logo';
import Statistic from './components/Statistics/Statistic';
import './App.css';


export default function App() {

  // if (document.querySelector('statistic').classList == 'statistic uncomfortable') {
  //   document.querySelector('emotion').classList.add('uncomfortable');
  // }

  return (
    <div className="App">
      <h1 className='h1__text'>Душнила</h1>

      <div className='container'>
        <div className='col'>
          <Emotion />
          <div className='row'>
            <Day />
            <Logo />
          </div>
        </div>
        <div className='col'>
          <Statistic />
        </div>
      </div>

    </div>
  );
}
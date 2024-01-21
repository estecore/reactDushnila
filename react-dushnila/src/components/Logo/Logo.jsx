import './Logo.css';
import logo from './logo.svg'

export default function Logo() {
    return (
        <div className='logo'>
           <img className='logo__img' src={logo} alt="logo" />
        </div>
    );
}
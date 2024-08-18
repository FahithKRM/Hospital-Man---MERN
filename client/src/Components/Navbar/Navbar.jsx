import {assets} from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>LOGO</h1>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button>Sign In</button>
    </div>
  )
}

export default Navbar

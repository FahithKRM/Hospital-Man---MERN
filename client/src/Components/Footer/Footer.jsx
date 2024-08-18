import './Footer.css'
import CircumIcon from "@klarr-agency/circum-icons-react"; // React



const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <h1>LOGO </h1>
      </div>
      <div className="center">
        <h2>Services</h2>
        <ul>
            <li>Appointmet</li>
            <li>Health Tips</li>
            <li>Pharmacy</li>
            <li>Appointmet</li>
        </ul>
      </div>
      <div className="right">
        <h2>Contact Details</h2>
        <ul>
            <li><CircumIcon name="mail"/>example@hos.com</li>
            <li><CircumIcon name="phone"/>+94 111-222-5555</li>
        </ul>
        <div className="social-icons">
            <CircumIcon name="twitter"/>
            <CircumIcon name="youtube"/>
            <CircumIcon name="facebook"/>
            <CircumIcon name="linkedin"/>
        </div>
      </div>
    </div>
  )
}

export default Footer

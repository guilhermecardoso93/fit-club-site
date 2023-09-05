import Logo from '../../assets/logo.png'
import "./style.css";

export function Header() {
  return (
    <div className="header">
      <img src={Logo} alt='Logo da Marca' className='logo'/>
      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

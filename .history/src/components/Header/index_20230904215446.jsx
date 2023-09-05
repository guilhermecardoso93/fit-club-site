import Logo from '../../assets/logo.png'
import "./style.css";

export function Header() {
  return (
    <div className="header">
      <img src={Logo} alt='Logo da Marca' className='logo'/>
    </div>
  );
}

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

import "./style.css";

export function Reasons() {
  return (
    <div className='reasons' id='reasons'>
      <div className="left-reasons">
        <img src={image1} alt=""/>
        <img src={image2} alt=""/>
        <img src={image3} alt=""/>
        <img src={image4} alt=""/>
      </div>

      <div className="right-reasons"></div>
    </div>
  )
}
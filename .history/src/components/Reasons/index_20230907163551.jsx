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
    <div className="reasons" id="reasons">
      <div className="left-reasons">
        <img src={image1} alt="" className="image-1" />
        <img src={image2} alt="" className="image-2" />
        <img src={image3} alt="" className="image-3" />
        <img src={image4} alt="" className="image-4" />
      </div>

      <div className="right-reasons">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-reasons">
          <div>
            <img src={tick} alt=""></img>
            <span>Over 100+ Expert Coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train faster and smarter than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partners</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "small",
          }}
        >
          our partners
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
}

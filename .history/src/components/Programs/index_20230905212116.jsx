import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

import "./style.css";

export function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program) => {
          <div className="category">
            {program.image}
          </div>
        })}
      </div>
    </div>
  );
}

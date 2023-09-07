import { plansData } from "../../data/plansData";
import "./style.css";

export function Plans() {
  return (
    <div className="plans-container" id="plans">
      <div className="programs-header">
        <span className="stroke-text">Ready to Start</span>
        <span>your journey</span>
        <span className="stroke-text">with us</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => {
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
          </div>;
        })}
      </div>
    </div>
  );
}

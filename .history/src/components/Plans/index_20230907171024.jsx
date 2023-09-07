import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
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
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>{plan.price}</span>

              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="feature" key={i}>
                      <img src={whiteTick} alt="" />
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

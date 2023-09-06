import { Header } from "../Header";
import "./style.css";

export function Hero() {
  return (
    <div className="hero">
      <div className="left-hero">
        <Header />

        <div className="the-best-ad">
          <span>the best fitness club in the town</span>
          <div></div>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal </span>
            <span>Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest.
            </span>
          </div>
        </div>
      </div>
      <div className="right-hero"></div>
    </div>
  );
}

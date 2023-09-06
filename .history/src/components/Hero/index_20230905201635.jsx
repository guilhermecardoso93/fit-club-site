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
            <span>Shape </span>
            <span>Your</span>
          </div>
        </div>
      </div>
      <div className="right-hero"></div>
    </div>
  );
}

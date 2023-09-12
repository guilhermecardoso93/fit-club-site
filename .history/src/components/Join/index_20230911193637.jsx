import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./style.css";

export function Join() {
  const form = useRef();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_l3r98km",
        "template_y3dfloj",
        form.current,
        "RSSU760IHaANuHBew"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-join">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-join">
        <div className="right-j">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your Email id"
            />
            <button className="btn btn-j">Join Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

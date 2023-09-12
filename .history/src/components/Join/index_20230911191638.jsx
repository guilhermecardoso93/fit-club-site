import "./style.css";

export function Join() {
  return (
    <div className="join" id="join-us">
      <div className="left-join">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US? </span>
        </div>
      </div>
      <div className="right-join">
        <div className="right-j">
            <input
              type="email"
              name="user_email"
              placeholder="Enter your Email id"
            />
            <button className="btn btn-j">Join Now</button>
        </div>
      </div>
    </div>
  );
}

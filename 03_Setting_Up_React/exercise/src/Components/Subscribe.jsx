import "../styles/subscribe.css";

export const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h1 className="title">SUBSCRIBE</h1>
      <p className="signup-text">
        Sign Up with your email to receive news and update.
      </p>
      <div className="input-container">
        <input className="input" placeholder="First name" />
        <input className="input" placeholder="Last name" />
        <input className="input" placeholder="Email" />
      </div>
      <br />
      <button className="subscribe-button">Subcribe</button>
    </div>
  );
};

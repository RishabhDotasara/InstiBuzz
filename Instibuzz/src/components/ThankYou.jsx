import React from "react";
import sit_back from "../assets/sit_back.webp";
import { LiaCheckCircleSolid } from "react-icons/lia";
import { RiStarSFill } from "react-icons/ri";

export default function ThankYou() {
  return (
    <div className="thankyou-page-container">
      <div className="vector-img-cont">
        <span style={{}}>
          Hello <strong>UserName!</strong>
        </span>
        <img src={sit_back} alt="Vector Image" />
      </div>

      <div className="order-confirmation-card">
        <div className="heading">
          <LiaCheckCircleSolid />
          <span>
            Sit back and relax. Your order is <strong>Confirmed!</strong>
          </span>
        </div>
        <div className="desc">
          We know you can't wait to get your hunch to it, so we have begun
          prepping for it right away.
        </div>
        <div className="buttons">
          <button>Track Order</button>
          <button>Pay Online</button>
        </div>
      </div>

      <div className="rating-card">
        <div className="heading">Help Us Improve.</div>
        <div className="stars">
          <div className="star" style={{ background: "#FF4040" }}></div>
          <div className="star" style={{ background: "#FF4040" }}></div>
          <div className="star" style={{ background: "#EE5622" }}></div>
          <div className="star" style={{ background: "#FFC500" }}></div>
          <div className="star" style={{ background: "#1FDF67" }}></div>
        </div>
      </div>

      <div className="info-cards">
        <div className="next card">
          <h1>What's Next?</h1>
          <p>
            We will send you a confirmation once your order is
            shipped.
          </p>
        </div>
        <div className="help card">
          <h1>Need Help?</h1>
          <p>For any queries or any assistance, contact us.</p>
        </div>
      </div>
    </div>
  );
}

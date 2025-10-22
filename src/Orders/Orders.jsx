import { useState } from "react";
import "./Order.scss";
const Order = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="background">
        <div></div>
        <button className={"button-design"} onClick={() => setClicked(true)}>
          <div className={`truck ${clicked ? "clicked" : ""}`}>
            <div className="doors">
              <div className={`upper-door ${clicked ? "clicked" : ""}`}></div>
              <div className={`lower-door ${clicked ? "clicked" : ""}`}></div>
            </div>
            <div className="truck-back"></div>

            <div className="truck-front">
              <div className="truck-glass"></div>
              <div className="truck-upper-beam"></div>
              <div className="truck-lower-beam"></div>
            </div>
            <div>
              <div className={clicked ? "upper-ray" : ""}></div>
              <div className={clicked ? "lower-ray" : ""}></div>
            </div>
          </div>
          <span className={`place-order ${clicked ? "clicked" : ""}`}>
            Place Order
          </span>
          <div className={`package ${clicked ? "clicked" : ""}`}>
            <div className="package-horizontal"></div>
            <div className="package-vertical"></div>
          </div>
          <div className={`dashes ${clicked ? "clicked" : ""}`}>
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
            <div className="dash" />
          </div>
          {clicked && (
            <span className="order-placed">
              <span>
                Order Placed
                <div className="checked">
                  <span className="horizontal" />
                  <span className="vertical" />
                </div>
              </span>
            </span>
          )}
        </button>
        <div>
          <button style={{ padding: 15, borderRadius:20 }} onClick={() => setClicked(false)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;

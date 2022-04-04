import React from "react";

function MyCarItem() {
  return (
    <div className="mycar-item">
      <div>
        <button>edit</button>
      </div>
      <div className="mycar-item-container">
        <div>
          <p className="mcic-img">Img holder</p>
        </div>
        <div className="mcic-one">
          <div>
            <div className="mcic-inner-one">
              <div>
                <h2>Make</h2>
                <p>Make Item</p>
              </div>
              <div>
                <h2>Make</h2>
                <p>Model item</p>
              </div>
            </div>
            <div className="mcic-inner-one">
              <div>
                <h2>Address</h2>
                <p>1312 el camino real st</p>
              </div>
            </div>
            <div className="mcic-inner-one">
              <div>
                <h2>City</h2>
                <p>San Francisco</p>
              </div>
              <div>
                <h2>Country</h2>
                <p>CA</p>
              </div>
            </div>
            <div>
              <h2>Description</h2>
              <p>This is a car that is fast and very very haha </p>
            </div>
          </div>
        </div>
        <div className="mcic-two">
          <div>
            <h2>Price</h2>
            <p>Price item</p>
          </div>
          <div>
            <h2>Cylinder</h2>
            <p>clyinder item</p>
          </div>
          <div>
            <h2>Transmisson</h2>
            <p>Transmisson item</p>
          </div>
          <div>
            <h2>Seats</h2>
            <p>seat item</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCarItem;

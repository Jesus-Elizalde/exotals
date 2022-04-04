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
              <h2>Make</h2>
              <h2>Make</h2>
            </div>
            <div className="mcic-inner-one">
              <h2>Address</h2>
            </div>
            <div className="mcic-inner-one">
              <h2>City</h2>
              <h2>Country</h2>
            </div>
            <div>
              <h2>Description</h2>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Cylinder</h2>
          </div>
          <div>
            <h2>Transmisson</h2>
          </div>
          <div>
            <h2>Seats</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCarItem;

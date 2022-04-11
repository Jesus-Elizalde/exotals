import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteOneFav, getAllFav } from "../../store/favorites";

const Favlist = () => {
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.favorites);
  const user = useSelector((state) => state.session.user);
  const favArr = Object.values(fav).filter((ele) => ele?.userId === user?.id);
  const cars = useSelector((state) => state.cars.cars);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);

    dispatch(getAllFav);
  }, [submitted]);

  return (
    <div className="dropdown FavContainerDropdown">
      {favArr.map((ele, i) => (
        <div className="dataItem favdropdown" key={i}>
          <img
            src={cars[ele.carId]?.Images[0]?.url}
            className="dataImg favimglist"
          />
          <a href={`/cars/${ele?.carId}`}>{cars[ele.carId]?.Model.name}</a>
          <a
            className="xbuttonfav"
            onClick={async () => {
              await dispatch(
                deleteOneFav({ userId: user?.id, carId: ele?.carId })
              );
              setSubmitted(true);
            }}
          >
            x
          </a>
        </div>
      ))}
    </div>
  );
};

export default Favlist;

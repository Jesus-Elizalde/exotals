import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { ReactComponent as FalseHeart } from "../../svg/falseheart.svg";
import { ReactComponent as TrueHeart } from "../../svg/trueheart.svg";

import { addOneFav, deleteOneFav } from "../../store/favorites";

const FavoriteHeart = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const carId = pathname.split("/").at(-1);

  const user = useSelector((state) => state.session.user);
  const favorite = useSelector((state) => state.favorites);
  const filteredarr = Object.values(favorite)?.filter(
    (ele) => ele.userId === user.id && ele.carId === +carId
  );

  const [heartToggle, setHeartToggle] = useState(filteredarr.length);
  const [asyncId, setAsyncId] = useState(null);
  useEffect(() => {
    const filteredarr = Object.values(favorite)?.filter(
      (ele) => ele.userId === user.id && ele.carId === +carId
    );

    setAsyncId(filteredarr[0]?.id);
  }, [heartToggle]);

  let content;

  if (heartToggle) {
    content = <TrueHeart />;
  } else {
    content = <FalseHeart />;
  }

  async function onClickDispatch() {
    setHeartToggle(!heartToggle);
    if (!heartToggle) {
      await dispatch(addOneFav({ userId: user?.id, carId: carId }));
    } else {
      await dispatch(
        deleteOneFav({ userId: user?.id, carId: carId, id: asyncId })
      );
    }
  }

  return <div onClick={onClickDispatch}>{content}</div>;
};

export default FavoriteHeart;

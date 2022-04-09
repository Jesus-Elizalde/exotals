import React, { useEffect, useState } from "react";

import NotEditMyCarItem from "./NotEditMyCarItem";
import EditMyCarItem from "./EditMyCarItem";
import { useDispatch } from "react-redux";

import * as carsActions from "../../store/cars";

function MyCarItem({ data }) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carsActions.getAllCars());
  }, [editMode]);

  let content;
  if (!editMode) {
    content = <NotEditMyCarItem data={data} edit={setEditMode} />;
  }
  if (editMode) {
    content = <EditMyCarItem data={data} edit={setEditMode} />;
  }
  return content;
}

export default MyCarItem;

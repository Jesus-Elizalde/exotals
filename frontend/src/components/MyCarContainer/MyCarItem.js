import React, { useState } from "react";

import NotEditMyCarItem from "./NotEditMyCarItem";
import EditMyCarItem from "./EditMyCarItem";

function MyCarItem({ data }) {
  const [editMode, setEditMode] = useState(false);

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

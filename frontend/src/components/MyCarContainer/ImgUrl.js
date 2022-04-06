import React from "react";

function ImgUrl({ remove }) {
  return (
    <div>
      <input></input>
      <button onClick={(prev) => remove(prev - 1)}>Remove</button>
    </div>
  );
}

export default ImgUrl;

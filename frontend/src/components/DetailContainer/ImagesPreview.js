import React from "react";

const ImagesPreview = ({ images }) => {
  return (
    <div className="image_preview">
      {images?.slice(0, 6).map((img, i) => (
        <div className="single_image_preview_box" key={i}>
          <img
            src={img.url}
            style={{ width: "100%" }}
            className="image-preview"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesPreview;

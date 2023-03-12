import React from "react";

const ImageCard = (props) => {
    const {imageUrl} = props;
  return (
    <div>
      <div className="avatar online">
        <div className="w-24 rounded-full">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    console.log(props);
    return <ImageCard key={image.id} image={image} />;
  });
  console.log(images);
  return <div className="image-list">{images}</div>;
};

export default ImageList;

import React, { useEffect, useState } from "react";
import CreateData from "./CreateData";
import Card from "./Card";

function Main() {
  const [images, setImages] = useState([]);
  console.log("images array", images);
  const renderedImages = images.map((image, index) => <Card key={index} imageSrc={image} />);

  return (
    <div className="bg-white text-center flex flex-col justify-center  items-center border-solid border-t-[1px] border-gray-200">
      <div className="uppercase mb-2 mt-2 pt-3">Image Gallery</div>
      <div className="w-10/12 mb-3 mt-1 text-[#909090]">
        Flip Turn is free HTML5 responsive<a className="text-black cursor-pointer"> website template </a> by templatemo. Credit goes to <a className="text-black cursor-pointer">Unsplash</a> for images
        used in this template. Morbi hendrerit lacinia magna et tempus. Integer placerat sed nulla non tincidunt.
      </div>
      <div className="mb-20 flex flex-row flex-wrap justify-center items-center min-h-[20rem]">{renderedImages}</div>
      <CreateData setImages={setImages} />
    </div>
  );
}

export default Main;

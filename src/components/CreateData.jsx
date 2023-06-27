import React, { useEffect, useState } from "react";

function CreateData(props) {
  // const [images, setImages] = useState([]);
  const [numberValue, setNumberValue] = useState(0);
  // console.log("images array", images)
  const handleNumberChange = (event) => {
    setNumberValue(Number(event.target.value));
  };
  const getData = () => {
    let tempImages = [];
    for (let i = 0; i < numberValue; i++) {
      tempImages = [...tempImages, `https://loremflickr.com/320/4${i}`];
    }
    props.setImages([...tempImages]);
    setNumberValue(0);
  };

  return (
    <div className="border-solid border-gray-300 border-2 ">
      <h2 className="text-blue-900 p-2 mb-2">Enter your desired numbers of images to put as dummy data:</h2>
      <input className="p-2 m-2 outline-black border-2 border-gray-400	" type="number" value={numberValue} onChange={handleNumberChange} />
      <button className="bg-gray-600 p-1 m-1 hover:bg-gray-950 hover:text-gray-400 cursor-pointer" onClick={() => getData()}>
        Checkout
      </button>
    </div>
  );
}

export default CreateData;

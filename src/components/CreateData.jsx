import React, { useEffect, useState } from "react";

function CreateData(props) {
  // const [images, setImages] = useState([]);
  const [numberValue, setNumberValue] = useState(0);
  // console.log("images array", images)
  const handleNumberChange = (event) => {
    const value = Number(event.target.value);
    if (value > 100) {
      return;
    } else {
      setNumberValue(value);
    }
  };
  const getData = () => {
    let tempImages = [];
    for (let i = 0; i < numberValue; i++) {
      tempImages = [...tempImages, `https://loremflickr.com/320/${420 + i}`];
    }
    props.setImages([...tempImages]);
    setNumberValue(0);
  };

  return (
    <div className="border-solid border-gray-300 border-2 mb-2">
      <h2 className="text-blue-900 p-6 mb-3 text-4xl">
        Enter your desired numbers of images to put as dummy data (Between 0 and 100):
      </h2>
      <input
        className="p-2 m-2 outline-black border-2 border-gray-400	text-4xl"
        type="number"
        min={0}
        max={100}
        value={numberValue}
        onChange={handleNumberChange}
      />
      <button
        className="bg-gray-600 p-2 text-white m-1 text-4xl hover:bg-gray-950 hover:text-gray-400 cursor-pointer "
        onClick={() => getData()}
      >
        Checkout
      </button>
    </div>
  );
}

export default CreateData;

import React, { useEffect, useState } from "react";

function Card(props) {
  return (
    <div className="p-1 m-2 cursor-pointer hover:transform hover:scale-110 transition duration-200 ease-in-out ">
      <img
        className="min-w-[20rem] max-w-[20rem] min-h-[26.25rem] max-h-[26.25]"
        src={props.imageSrc}
      />
    </div>
  );
}

export default Card;

import React, { useEffect, useState } from "react";
import CreateData from "./CreateData";
import Card from "./Card";
import Pagination from "./Pagination";

function Main() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);

  console.log("images array", images);

  const totalPosts = images.length;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = images.slice(indexOfFirstPost, indexOfLastPost);

  const renderedImages = currentPosts.map((image, index) => (
    <Card
      key={index}
      imageSrc={image}
    />
  ));

  ///change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pb-2 bg-white text-center flex flex-col justify-center items-center border-solid border-t-[1px] border-gray-200">
      <div className="uppercase mb-10 mt-2 pt-3 text-6xl font-medium">Image Gallery</div>
      <div className="w-10/12 mb-10 mt-1 text-[#909090] text-4xl">
        Flip Turn is free HTML5 responsive
        <a className="text-black cursor-pointer"> website template </a> by templatemo. Credit goes
        to <a className="text-black cursor-pointer">Unsplash</a> for images used in this template.
        Morbi hendrerit lacinia magna et tempus. Integer placerat sed nulla non tincidunt.
      </div>
      <div className="mb-10 flex flex-row flex-wrap justify-center min-h-min">{renderedImages}</div>

      <Pagination
        postPerPage={postPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
      <CreateData setImages={setImages} />
    </div>
  );
}

export default Main;

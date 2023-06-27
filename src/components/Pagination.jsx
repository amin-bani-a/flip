import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="mb-6 flex flex-row justify-center items-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="p-4 m-2 text-3xl hover:bg-slate-500 hover:text-white rounded-2xl"
          >
            <a
              href="!#"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

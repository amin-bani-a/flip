import React from "react";

function Header() {
  const menu = ["HOME", "ABOUT", "AWARDS", "CONTACT", "EXTERNAL"];
  return (
    <div className="bg-white text-center h-[6.75rem] flex flex-row justify-between items-center border-b-gray-500">
      <div className=" text-5xl m-3 p-2 min-w-fit cursor-pointer text-gray-500">FLIP TURN</div>
      <div className="mr-2">
        <div className=" m-1 p-1">
          <ul className="flex flex-row justify-between items-center">
            {menu.map((item) => (
              <li key={item.index} className="px-5 py-3 cursor-pointer hover:bg-teal-200 shadow-[1px_1px_1px_rgba(80,80,80,0.4)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

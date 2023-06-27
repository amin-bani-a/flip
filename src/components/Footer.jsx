import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function Footer() {
    return (
        <div className="bg-gray-100 h-16 flex flex-row justify-between items-center w-full px-2.5">
            <div className="self-center text-sm text-gray-700">
                Copyright © 2084 Your Company Name
            </div>
            <div className="flex justify-between">
                <FontAwesomeIcon
                    icon="fa-brands fa-facebook-f"
                    className="text-gray-400 text-lg mx-1 cursor-pointer hover:text-white items-center self-center m-1.5 p-1.5"
                />
                <FontAwesomeIcon
                    icon="fa-brands fa-twitter"
                    className="text-gray-400 text-lg mx-1 cursor-pointer hover:text-white items-center self-center m-1.5 p-1.5"
                />
                <FontAwesomeIcon
                    icon="fa-brands fa-google-plus-g"
                    className="text-gray-400 text-lg mx-1 cursor-pointer hover:text-white items-center self-center m-1.5 p-1.5"
                />
                <FontAwesomeIcon
                    icon="fa-brands fa-dribbble"
                    className="text-gray-400 text-lg mx-1 cursor-pointer hover:text-white items-center self-center m-1.5 p-1.5"
                />
                <FontAwesomeIcon
                    icon="fa-brands fa-instagram"
                    className="text-gray-400 text-lg mx-1 cursor-pointer hover:text-white items-center self-center m-1.5 p-1.5"
                />
                <FontAwesomeIcon
                    icon="fa-brands fa-linkedin-in"
                    className="text-gray-400 text-lg mx-1 cursor-pointer hover:text-white items-center self-center m-1.5 p-1.5"
                />
            </div>
        </div>
    );
}

export default Footer;

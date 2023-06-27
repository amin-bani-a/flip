import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Layout() {
  return (
    <div className=" bg-gray-100 min-h-full px-10 my-10 flex-col justify-center w-full drop-shadow-lg">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default Layout;

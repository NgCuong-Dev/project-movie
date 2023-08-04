import Header from "../../Components/Header/Header";
import React from "react";
import Footer from "../Footer/Footer";

export default function Layout({ Component }) {
  return (
    <div className="space-y-5 h-full min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Component />
      </div>
      <Footer />
    </div>
  );
}

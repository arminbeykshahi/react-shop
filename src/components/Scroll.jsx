import React from "react";
import "../components/Scroll.css";
export default function Scroll() {
  function scrolltotop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <i onClick={scrolltotop} className="bi bi-caret-up"></i>
    </div>
  );
}

import React from "react";
import "../pages/About.css";

export default function About() {
  return (
    <div>
      <div className="about mt-1">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <br />
              <br />
              <br />
              <p className="text-center mx-auto my-auto mt-5">
                ما در این سامانه به منظور رفاه حال شهروندان انواع خودرو های
                سواری شرکت های ایرانخودرو و سایپا را با پیش پرداخت اولیه و اقساط
                بلند مدت 12،36،60 ماهه در اختیار شهروندان قرار می دهیم تا زمینه
                ساز آسایش خانواده ها در رفت و آمد های درون و برون شهری شویم.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="../src/assets/electric-car-20.png"
                alt=""
                className="carimg ms-4"
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

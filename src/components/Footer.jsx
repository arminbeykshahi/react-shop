import React from "react";
import "../components/Footer.css";
export default function Footer() {
  return (
    <div>
      <div className="footer mt-5">
        <div className="footer-items">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-4 text-center">
                <h5>درباره شرکت</h5>
                <hr />
                <p>
                  در این شرکت ما قصد داریم با فراهم نمودن تسهیلات ویژه خانواده
                  های ایرانی را صاحب خودرو دلخواهشان کنیم.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h5>راه های ارتباطی</h5>
                <hr />
                <p>تلفن : 09121234567</p>
                <p>آدرس : تهران -شهرک غرب</p>
                <i className="bi bi-telegram"></i>
                <i className="bi bi-whatsapp ms-2"></i>
                <i className="bi bi-instagram ms-2"></i>
              </div>
              <div className="col-md-4 text-center">
                <h5>نماد الکترونیکی</h5>
                <hr />
                <img src="../src/assets/enamad.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

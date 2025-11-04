import "../pages/Home.css";

export default function Home() {
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
                ما در این مرکز تخصصی فروش خودرو های ایرانی از برند های
                ایرانخودرو و سایپا قصد داریم تا با فراهم نمودن تسهیلات ویژه تلاش
                کنیم هر خانواده ایرانی صاحب خودرو دلخواه خود شود و موجبات آسایش
                شهروندان را فراهم نماییم.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="../src/assets/order-confirmed-1-97.png"
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

      <div className="container mt-5">
        <h5>نحوه ثبت سفارش : </h5>
      </div>

      <div className="section1 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4">
              <span>مرحله اول :</span>
              <br />
              <p>ابتدا به قسمت محصولات رفته و کالا مورد نظر را انتخاب کنید.</p>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

      <div className="section2 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4"> </div>
            <div className="col-md-6">
              <span>مرحله دوم :</span>
              <br />
              <p>
                در صفحه داخلی محصول مشخصات را انتخاب و به سبد خرید مراجعه کنید
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section3 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4">
              <span>مرحله سوم :</span>
              <br />
              <p>
                با پرداخت هزینه ظرف حداکثر 48 ساعت گوشی تحویل شما داده خواهد شد.
              </p>{" "}
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

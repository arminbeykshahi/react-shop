import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { usePurchaseStore } from "../store/purchasebasket";
import { useState } from "react";
import { useLoginStore } from "../store/Islogin";

export default function Header() {
  const { basket } = usePurchaseStore();
  const [showsidebar, setShowsidebar] = useState(false);
  const { islogin, username } = useLoginStore();

  return (
    <div>
      <div className="header d-flex justify-content-between align-items-center">
        <i
          onClick={() => setShowsidebar(true)}
          className="bi bi-list fs-2 ms-4"
        ></i>

        <div className="items">
          <ul className="d-flex">
            <li>
              <NavLink to="/">صفحه اصلی</NavLink>
            </li>
            <li className="ms-3">
              <NavLink to="/products">محصولات</NavLink>
            </li>
            <li className="ms-3">
              <NavLink to="/about"> درباره ما </NavLink>
            </li>
            <li className="ms-3">
              <NavLink to="/register">ثبت نام | ورود</NavLink>
            </li>
          </ul>
        </div>
        <div className="logo me-4 d-flex align-items-center">
          {islogin == false ? "" : <span className="me-3">{username}</span>}

          <div>
            <Link to={"/purchasebasket"}>
              <i className="bi bi-cart fs-3">
                <div className="tedad">
                  <p className="text-center">{basket.length}</p>
                </div>
              </i>
            </Link>
          </div>
        </div>
      </div>

      {showsidebar == false ? (
        ""
      ) : (
        <div className="sidebar">
          <i onClick={() => setShowsidebar(false)} className="bi bi-x-lg"></i>
          <br />
          <ul className="text-center mt-5 ">
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <br />
            <li>
              <Link to="/products">محصولات</Link>
            </li>
            <br />
            <li>
              <Link to="/about"> درباره ما </Link>
            </li>
          </ul>
          <br />
          <div className="text-center">
            <i className="bi bi-telegram"></i>
            <i className="bi bi-whatsapp ms-2"></i>
            <i className="bi bi-instagram ms-2"></i>
          </div>
        </div>
      )}
    </div>
  );
}

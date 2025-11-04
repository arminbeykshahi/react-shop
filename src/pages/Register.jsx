import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function adduser(e) {
    e.preventDefault();

    if (
      user.name &&
      user.email &&
      user.password !== "" &&
      /^[A-Z][a-z0-9]{7}$/.test(user.password)
    ) {
      axios
        .post("http://localhost:3000/users", {
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .then(function (response) {
          console.log(response);
          Swal.fire({
            title: "حساب کاربری ساخته شد",
            icon: "success",
            draggable: true,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div>
      <div className="register mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto my-auto">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={adduser}>
                    <div className="alert alert-danger">
                      تمامی فیلد ها را پر کنید
                    </div>

                    <div className="mb-3">
                      <label for="name" className="form-label">
                        نام کاربری :{" "}
                      </label>
                      <input
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="لطفا نام کاربری را وارد کنید"
                      />
                    </div>

                    <div className="mb-3">
                      <label for="email" className="form-label">
                        ایمیل :{" "}
                      </label>
                      <input
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        type="email"
                        className="form-control"
                        id="email"
                      />
                    </div>

                    <div className="mb-3">
                      <label for="password" className="form-label">
                        رمز عبور :
                      </label>
                      <input
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="لطفا رمز عبور وارد کنید"
                      />
                      <span className="text-danger">
                        رمز عبور باید دارای 8 کاراکتر باشد و حرف اول آن بزرگ
                        باشد
                      </span>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary w-100">
                      ساخت
                    </button>
                    <br />
                    <br />
                    <Link to="/login" className="ms-2 fw-bold">
                      {" "}
                      صفحه ورود<i className="bi bi-arrow-left ms-1 fw-bold"></i>{" "}
                    </Link>
                  </form>
                </div>
              </div>
            </div>
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
      <br /> <br />
      <br />
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../store/Islogin";
export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { checklogin, getusername } = useLoginStore();

  function getlogin(e) {
    e.preventDefault();

    if (name && password !== "") {
      axios
        .get(`http://localhost:3000/users?name=${name}&password=${password}`)
        .then(function (response) {
          checklogin();

          if (response.data.length !== 0) {
            navigate("/");

            Swal.fire({
              title: " شما با موفقیت وارد شدید ",
              icon: "success",
              draggable: true,
            });

            getusername(name);
          }
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    }
  }

  return (
    <div>
      <div className="login mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto my-auto">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={getlogin}>
                    <div className="mb-3">
                      <label for="name" className="form-label">
                        نام کاربری :{" "}
                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="لطفا نام کاربری را وارد کنید"
                      />
                    </div>

                    <div className="mb-3">
                      <label for="password" className="form-label">
                        رمز عبور :
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="لطفا رمز عبور وارد کنید"
                      />
                    </div>

                    <button className="btn btn-primary w-100">ورود</button>
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
      <br />
    </div>
  );
}

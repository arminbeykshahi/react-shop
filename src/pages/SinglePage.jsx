import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../pages/SinglePage.css";
import Swal from "sweetalert2";
import { usePurchaseStore } from "../store/purchasebasket";

export default function SinglePage() {
  const route = useParams();
  const [post, setPost] = useState({});
  const { addtobasket } = usePurchaseStore();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${route.id}`)
      .then(function (response) {
        setPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, [route]);

  return (
    <div>
      <div className="main mt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <img className="singleimage" src={post.image} alt="" />
            </div>
            <div className="col-md-6 text-center">
              <p className="mt-5">{post.features}</p>
              <br />
              <br />
              <button
                onClick={() => {
                  addtobasket(post);
                  Swal.fire({
                    title: "محصول به سبد خرید اضافه شد!",
                    icon: "success",
                    draggable: true,
                  });
                }}
                type="button"
                className="btn btn-success w-75 text-center mx-auto"
              >
                افزودن به سبد خرید
              </button>
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
      <br />
      <br />
      <br />
    </div>
  );
}

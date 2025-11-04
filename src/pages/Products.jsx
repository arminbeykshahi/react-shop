import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";

export default function Products() {
  const [posts, setPosts] = useState([]);
  const [meghdar, setMeghdar] = useState("allproducts");
  const [cheapest, setCheapest] = useState([]);
  const [expensive, setExpensive] = useState([]);

  useEffect(() => {
    if (meghdar == "allproducts") {
      axios
        .get("http://localhost:3000/posts")
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    } else {
      axios
        .get(`http://localhost:3000/posts?brand=${meghdar}`)
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    }
  }, [meghdar]);

  function getmeghdar(meghdar) {
    setMeghdar(meghdar);
  }

  useEffect(() => {
    if (posts.length != 0) {
      setCheapest(
        [...posts].reduce((firsitem, currentitem) => {
          if (currentitem.price < firsitem.price) {
            return currentitem;
          } else {
            return firsitem;
          }
        }, posts[0])
      );
    }
  }, [posts]);

  useEffect(() => {
    if (posts.length != 0) {
      setExpensive(
        [...posts].reduce((firsitem, currentitem) => {
          if (currentitem.price > firsitem.price) {
            return currentitem;
          } else {
            return firsitem;
          }
        }, posts[0])
      );
    }
  }, [posts]);

  return (
    <div>
      <div className="main d-flex">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="text-center">برند ها</h5>
                  <hr />
                  <div onChange={(e) => getmeghdar(e.target.value)}>
                    <div className="mt-4">
                      <input
                        value="allproducts"
                        type="radio"
                        id="radio5"
                        name="khodro"
                      />
                      <label className="ms-2" for="radio5">
                        همه
                      </label>
                      <br />
                      <br />
                      <input
                        value="irankhodro"
                        type="radio"
                        id="radio1"
                        name="khodro"
                      />
                      <label className="ms-2" for="radio1">
                        ایرانخودرو
                      </label>
                      <br />
                      <br />
                      <input
                        value="saipa"
                        type="radio"
                        id="radio2"
                        name="khodro"
                      />
                      <label className="ms-2" for="radio2">
                        سایپا
                      </label>
                      <br />
                      <br />
                    </div>
                  </div>
                  <br />
                  <br />
                  <h5 className="text-center">قیمت</h5>
                  <hr />
                  <span>
                    ارزان ترین : <span>{cheapest.name}</span>
                  </span>
                  <br />
                  <br />
                  <span>
                    گران ترین : <span>{expensive.name}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="products mt-5 ">
                <div className="container">
                  <div className="row g-5">
                    {posts.map((post, id) => {
                      return (
                        <div key={id} className="col-md-4">
                          <Link to={`/posts/${post.id}`}>
                            <div className="item mx-auto">
                              <img src={post.image} />

                              <div className="mt-5">
                                <h6>{post.name}</h6>
                                <br />
                                <div className="text-center">
                                  <span>
                                    {post.price}
                                    <span className="ms-1">تومان</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <br />
              <span>
                <span className="ms-2">تعداد محصولات:</span>
                {[...posts].length}
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

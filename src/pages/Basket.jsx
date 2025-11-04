import React, { useEffect, useState } from "react";
import { usePurchaseStore } from "../store/purchasebasket";
import "../pages/Basket.css";

export default function Basket() {
  const { basket, deletebasket } = usePurchaseStore();
  const [sum, setSum] = useState("");

  useEffect(() => {
    setSum(
      [...basket].reduce((firstitem, currentitem) => {
        return firstitem + currentitem.price;
      }, 0)
    );
  }, [basket]);

  return (
    <div>
      {[...basket].length == 0 ? (
        <div className="text-center mt-5 mx-auto fw-bold">
          سبد خرید خالی می باشد
        </div>
      ) : (
        <div>
          <table className="table table-sm mt-5 w-75 text-center align-items-center mx-auto">
            <thead>
              <tr>
                <th>نام</th>
                <th>عکس</th>
                <th>تعداد</th>
                <th>قیمت</th>
                <th>حدف</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((product, id) => {
                return (
                  <tr key={id}>
                    <td>{product.name}</td>
                    <td>
                      <img
                        className="productimage mx-auto my-auto text-center"
                        src={`${product.image}`}
                        alt=""
                      />
                    </td>
                    <td>{product.tedad}</td>
                    <td>{product.price}</td>
                    <td>
                      <button
                        onClick={() => deletebasket(product.id)}
                        className="btn btn-danger"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />

          <div className="mx-auto text-center">
            <span>
              مجموع سبد خرید : <span> {sum} تومان</span>
            </span>
          </div>
        </div>
      )}
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

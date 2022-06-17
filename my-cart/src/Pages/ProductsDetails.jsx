import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <>
      <h1>Product Details</h1>
      <div>
        <div>
          <img style={{ width: "200px" }} src={item.img} alt="shirt" />
        </div>
        <h2>{item.title}</h2>
        <h3>Price: ₹{item.price}</h3>
        <div>
          <button>Add to Cart</button>
        </div>
        <div>
          <h4>Description</h4>
          <p
            style={{
              fontSize: "14px",
              width: "450px",
              margin: "auto",
              lineHeight: "20px"
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
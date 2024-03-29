import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
`;

const Women = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <h1>Women</h1>
      <ProductsStyle>
        {products.map((item) => (
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "15px"
            }}
            onClick={() => navigate(`/productsDetails/${item.id}`)}
          >
            <div>
              <img style={{ width: "50px" }} src={item.img} alt="shirt" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </ProductsStyle>
    </>
  );
};

export default Women;
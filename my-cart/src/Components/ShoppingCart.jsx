import React from "react";
// import shoppingCart from "../../public/assets/shopping-cart.png";
import styled from "styled-components";

const ShoppingCartImg = styled.img`
  height: 30px;
  width: 30px;
`;

const ShoppingCart = () => {
  return (
    <div>
      <a href="cart.jsx"><ShoppingCartImg src="/assets/shopping-cart.png" alt="shopping_cart" /></a>
    </div>
  );
};

export default ShoppingCart;
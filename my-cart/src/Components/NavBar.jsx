import React from "react";
import styled from "styled-components";
import ShoppingCart from "./ShoppingCart";
import { Link, useNavigate } from "react-router-dom";

const NavBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: lightgoldenrodyellow;
  padding: 0px 20px;
  box-sizing: border-box;
`;

const NavBar = () => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    navigate(`/${e.target.value}`);
  };

  return (
    <div>
      <NavBarStyle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ fontSize: "28px" ,color:"aqua"}}>BUY ANYTHING WITH US...............</div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <label>Category : </label>
            <select onChange={(e) => handleChange(e)}>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>
          <div>
            <Link to="/aboutUs">About Us</Link>
          </div>
          <div>
            <Link to="/faq">FAQ</Link>
          </div>
          <div>
            <Link to="/contactUs">Contact Us</Link>
          </div>
          <div>
            <ShoppingCart />
          </div>
        </div>
      </NavBarStyle>
    </div>
  );
};

export default NavBar;
import React from "react";
import styled from "styled-components";

const BannerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: white;
  background-color:white
`;

const Banner = () => {
  return (
    <div>
      <BannerStyle>
        <div>
          <div style={{color:"orange" }}> Shop</div>
          <div style={{ fontSize: "12px" ,color:"red"}}>
          </div>
        </div>
      </BannerStyle>
    </div>
  );
};

export default Banner;
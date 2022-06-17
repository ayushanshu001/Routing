import React from "react";
import styled from "styled-components";

const BannerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: white;
  background-color:teal
`;

const Banner = () => {
  return (
    <div>
      <BannerStyle>
        <div>
          <div style={{color:"orange" }}>Praveen's Shop</div>
          <div style={{ fontSize: "12px" ,color:"red"}}>
            Flat 50% off use coupon - MASAI (code: FW16-677)
          </div>
        </div>
      </BannerStyle>
    </div>
  );
};

export default Banner;
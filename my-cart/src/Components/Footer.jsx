import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";





const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  margin-top: 1500px;
  background-color: white;
`;

const FooterPara = styled.p`
  font-size: 13px;
  line-height: 9px;
`;

const SocialImg = styled.img`
  height: 30px;
  width: 30px;
`;

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <div>
          <div>POLICY INFO</div>
          <div>
            <FooterPara>Privacy Policy</FooterPara>
            <FooterPara>Terms of Sale</FooterPara>
            <FooterPara>Terms of Use</FooterPara>
            <FooterPara>Report Abuse & Takedown Policy</FooterPara>
            <FooterPara>
              <Link to="/faq">FAQ</Link>
            </FooterPara>
          </div>
        </div>
        <div>
          <div>COMPANY</div>
          <div>
            <FooterPara>Impact@pocketShop</FooterPara>
            <FooterPara>
              <Link to="/jobOpportunities">Job opportunities</Link>
            </FooterPara>
            <FooterPara>Blog</FooterPara>
            <FooterPara>Sitemap</FooterPara>
            <FooterPara>
              <Link to="/contactUs">Contact us</Link>
            </FooterPara>
          </div>
        </div>
        <div>
          <div>BUSINESS</div>
          <div>
            <FooterPara>Shopping app</FooterPara>
            <FooterPara>Sell on Pocket shop</FooterPara>
            <FooterPara>Media enquiries</FooterPara>
          </div>
        </div>
        <div>
          <div>POPULAR LINKS</div>
          <div>
            <FooterPara>Lehenga</FooterPara>
            <FooterPara>Headphones</FooterPara>
            <FooterPara>Kid's clothing</FooterPara>
            <FooterPara>Sarees</FooterPara>
            <FooterPara>Shoes</FooterPara>
            <FooterPara>Winter wear</FooterPara>
            <FooterPara>Shirt for men</FooterPara>
          </div>
        </div>
        <div>
          <div>SUBSCRIBE</div>
          <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
            <div>
              <SocialImg src="/assets/facebook.png" alt="facebookImg" />
            </div>
            <div>
              <SocialImg src="/assets/twitter.png" alt="twitterImg" />
            </div>
            <div>
              <SocialImg src="/assets/instagram.png" alt="instagramImg" />
            </div>
            <div>
              <SocialImg src="/assets/youtube.png" alt="pinterestImg" />
            </div>
            <div>
              <SocialImg src="/assets/pinterest.png" alt="youtubeImg" />
            </div>
          </div>
        </div>
      </FooterStyle>
     </div>
  );
};

export default Footer;
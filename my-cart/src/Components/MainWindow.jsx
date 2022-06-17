import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Kids from "../Pages/Kids";
import Unisex from "../Pages/Unisex";
import AboutUs from "../Pages/AboutUs";
import Faq from "../Pages/Faq";
import ContactUs from "../Pages/ContactUs";
import JobOpportunities from "../Pages/JobOpportunities";

const MainWindowStyle = styled.div`
  max-width: 1800px;
     margin: auto;
  
`;

const MainWindow = () => {
  return (
    <div>
      <MainWindowStyle>
        <Banner />
        <NavBar />

        <Routes>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="unisex" element={<Unisex />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="jobOpportunities" element={<JobOpportunities />} />
        </Routes>

        <Footer />
      </MainWindowStyle>
    </div>
  );
};

export default MainWindow;
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../../src/main.css";
import GuideForm from "../components/GuideForm/GuideForm";

function GuidePage() {
  return (
    <div>
      <NavBar />
      <GuideForm />

      <Footer />
    </div>
  );
}

export default GuidePage;

import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../../src/main.css";
import ContactForm from "../components/ContactForm/ContactForm";

function ContactPage() {
  return (
    <div>
      <NavBar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;

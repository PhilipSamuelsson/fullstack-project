import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import React from "react";
import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(data);
  };

  return (
    <>
      <div className="contact-img">
        <div className="home-cards">
          <div className="section">
            <div className="section-head">
              <h2>Hör av dig till oss</h2>
              <ul>
                <li>
                  <PlaceIcon
                    color="success"
                    style={{ marginRight: 10 }}
                    fontSize="medium"
                  />
                  Trekantsvägen 1,
                  <br /> 12059 Stockholm.
                </li>
                <br />

                <li>
                  <LocalPhoneIcon
                    color="success"
                    style={{ marginRight: 10 }}
                    fontSize="medium"
                  />
                  08-7201122
                </li>

                <li>
                  <AlternateEmailIcon
                    color="success"
                    style={{ marginRight: 10 }}
                    fontSize="medium"
                  />
                  kontakt@airventure.com
                </li>

                <li>
                  <HomeIcon
                    color="success"
                    style={{ marginRight: 10 }}
                    fontSize="medium"
                  />
                  www.airventure.com
                </li>
              </ul>
            </div>
          </div>
          <form className="contactform" method="post" onSubmit={handleSubmit}>
            <h1>
              Kontakta <span>AirVenture</span>
            </h1>
            <input
              type="text"
              name="name"
              id=""
              onChange={handleChange}
              value={data.name}
              placeholder="Namn..."
            ></input>
            <input
              type="email"
              name="email"
              id=""
              onChange={handleChange}
              value={data.email}
              placeholder="Email..."
            ></input>
            <input
              type="phone"
              name="phone"
              id=""
              onChange={handleChange}
              value={data.phone}
              placeholder="Telefon..."
            ></input>
            <textarea
              name="message"
              id=""
              onChange={handleChange}
              value={data.message}
              placeholder="Meddelande"
            ></textarea>
            <button type="submit">Skicka</button>
            <h2></h2>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

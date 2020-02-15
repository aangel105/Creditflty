import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <header className="about_header">
        <h1 className="header_title">About Us</h1>
        <h6 className="header_slogan"> Wander - Explore - Discover </h6>
      </header>
      <div className="tittle">
        <h1>Who We Are</h1>
        <hr />
      </div>
      <main className="about_main">
        <div className="main_desc">
          <div className="main_text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              quaerat atque corporis asperiores mollitia perspiciatis iusto et
              laboriosam blanditiis! Excepturi velit, reiciendis dolores autem
              iste quas magni, veniam numquam quaerat ipsa quisquam.{" "}
            </p>
            <p className="second_paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              alias repellat a. Itaque et consequatur amet eos! Unde
              accusantium, dolorum praesentium animi adipisci aut, nesciunt qui
              voluptatum natus totam distinctio dolor nihil maxime quod voluptas
              obcaecati incidunt nulla placeat.
            </p>
          </div>
          <div className="main_img"></div>
        </div>
      </main>
      <footer className="footer_container">
        <div className="footer_header">
          <h1>Travel Tips</h1>
        </div>
        <hr />
        <div className="boxes_items">
          <div className="box_item">
            <div className="box_header box1">
              <h6>Hotel</h6>
            </div>
            <div>
              <ul className="spend_tips">
                <li>Uses booking portals</li>
                <li>check for status match</li>
                <li>apply for hotel credit cards</li>
              </ul>
            </div>
          </div>
          <div className="box_item">
            <div className="box_header box2">
              <h6>Earn</h6>
            </div>
            <div>
              <ul className="earn_tips">
                <li>Sign up for rewards programs</li>
                <li>Pay with the right card</li>
                <li>Buy Points when possible</li>
              </ul>
            </div>
          </div>
          <div className="box_item">
            <div className="box_header box3">
              <h6>Travel</h6>
            </div>
            <div>
              <ul className="travel_tips">
                <li>Use Google flight to book flight</li>
                <li>Be flexible with your travel date</li>
                <li>Buy basic economic tickets</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default AboutUs;

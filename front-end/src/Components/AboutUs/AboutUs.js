import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <header className="about_header">
        <h1 className="header_title">About Us</h1>
      </header>
      <div className="tittle">
      <h1 >Who We Are</h1>
      <hr />
      </div>
      <main className="about_main">
        <div className="main_desc">
          <div className="main_text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              quaerat atque corporis asperiores mollitia perspiciatis iusto et
              laboriosam blanditiis! Excepturi velit, reiciendis dolores autem
              iste quas magni, veniam numquam quaerat ipsa quisquam. Alias eaque
              dolor, repudiandae esse mollitia reiciendis non veritatis
              reprehenderit asperiores sapiente? Libero est vel aliquam nemo,
              error, mollitia enim qui tenetur reprehenderit nulla excepturi
              sunt veniam quaerat aliquid. Non veniam ratione repudiandae
              aliquid alias, voluptatibus dicta ut vero. 
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              alias repellat a. Itaque et consequatur amet eos! Unde
              accusantium, dolorum praesentium animi adipisci aut, nesciunt qui
              voluptatum natus totam distinctio dolor nihil maxime quod voluptas
              obcaecati incidunt nulla placeat. 
            </p>
          </div>
          <div className="main_img">
            <img
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="about_us"
          />
          </div>
        </div>
      </main>
      <footer className="about_footer">
        <hr />
        <h1>Travel Tips</h1>
        <div className="footer_boxes">
          <div className="box1">
            <h6>Spend</h6>
            <ul className="spend_tips">
              <li>Don't overspend</li>
              <li>Pay your full balance every Month</li>
              <li>Pay your friends bills</li>
            </ul>
          </div>
          <div className="box2">
            <h6>Earn</h6>
            <ul className="earn_tips">
              <li>Sign up for rewards programs</li>
              <li>Pay with the right card</li>
              <li>Buy Points when possible</li>
            </ul>
          </div>
          <div className="box3">
            <h6>Travel</h6>
            <ul className="travel_tips">
              <li>Use Google flight to book flight</li>
              <li>Be flexible with your travel date</li>
              <li>Buy basic economic tickets</li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default AboutUs;

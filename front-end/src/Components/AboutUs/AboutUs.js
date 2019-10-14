import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about_container">
      <header className="about_header">
        <div className="one-content">
          <h1>About Us</h1>
        </div>
      </header>
      <main className='about_main'>
      {/* <div className="main_cardImage">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
        />
      </div> */}
      {/* <div className="main_desertImage">
        <img
          alt=" "
          src="https://images.unsplash.com/photo-1461237439866-5a557710c921?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
        />
      </div> */}
      </main>

      <footer className="about_footer">
        <div className="square-one">Box 1</div>
        <div className="square-two">Box 2</div>
        <div className="square-three">Box 3</div>
      </footer>
    </div>
  );
};

export default AboutUs;

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <div className="imageOne">
          <div className="imageOneLogo">
            <span>CreditFly</span>
          </div>
        </div>
      </header>
      <main>
        <div className="containerOne">
          <h4 className="contentHeaderOne">Credit Card Strategy</h4>

          <ul className="contentParagraphOne">
            <li>
              Signing up for new credit cards when meeting the minimum spend.
            </li>
            <li>Pay your full balance every month to avoid paying fees.</li>
            <li>
              Try your best to put all your expenses on your credit cards .
            </li>
          </ul>
        </div>

        <div className="imageTwo" />

        <div className="homeContentTwo">
          <p className="contentParagraphTwo">
            “The world is a book and those who do not travel read only one
            page.”
          </p>
        </div>
        <div className="imageThree" />
        <div className="containerThree">
          <h4 className="contentHeaderThree">Most Common Perks</h4>
          <ul className="contentParagraphThree">
            <li>After expending certain amount you earn a signing bonus. </li>
            <li>Lounge Access when going to the airport including 2 guess.</li>
            <li>
              Free Checked bags for the cardholder and others travelers on the
              same reservation.
            </li>
          </ul>
        </div>
      </main>

      <footer>
        <div className="lastImage " />
      </footer>
    </div>
  );
};

export default Home;

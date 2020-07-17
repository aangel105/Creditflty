import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardImage, cardName, cardReview }) => {
  return (
    <React.Fragment>
      <img src={cardImage} alt="credit cards" className="creditCards" /> <br />
      <span className="creditCardsName"> Card name: </span>{" "}
      <span className="cardsReviews"> {cardName} </span> <br />{" "}
      <span className="creditCardsName"> Card Reviews: </span>{" "}
      <span className="cardsReviews"> {cardReview} </span> <br />
      <span className="linkBackHome">
        Thank you for submitting the form!{" "}
        <Link to="/" id="link">
          Home
        </Link>
      </span>
    </React.Fragment>
  );
};

export default Card;

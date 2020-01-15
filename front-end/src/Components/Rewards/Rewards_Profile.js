import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Rewards_Profile.css";
import "../Home/Home.css";

class Rewards_Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelExpenses: [],
      dinningExpenses: [],
      gasExpenses: [],
      groceryExpenses: [],
      creditCards: [],
      creditCardIndex: null,
      isFormSubmitted: false,
      message: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount = () => {
    const {
      travelExpenses,
      dinningExpenses,
      gasExpenses,
      groceryExpenses
    } = this.state;
    axios
      .get("/creditcards")
      .then(res => {
        this.setState({
          creditCards: res.data.data
        });
      })
      .catch(err => {
        this.setState({
          message: "Error retrieving creditcards"
        });
        throw err;
      });

    axios
      .post("/addedExpenses", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */* ",
          "Content-type": "application/json"
        },
        travelExpenses: JSON.stringify(travelExpenses),
        dinningExpenses: JSON.stringify(dinningExpenses),
        gasExpenses: JSON.stringify(gasExpenses),
        groceryExpenses: JSON.stringify(groceryExpenses)
      })
      .then(res => {
        console.log(res);
      });
  };

  submitForm = e => {
    e.stopPropagation();
    e.preventDefault();
    const {
      travelExpenses,
      dinningExpenses,
      gasExpenses,
      groceryExpenses
    } = this.state;
    if (
      travelExpenses.length === 0 ||
      dinningExpenses.length === 0 ||
      gasExpenses.length === 0 ||
      groceryExpenses.length === 0
    ) {
      alert(
        "Please enter a value for all input field, if not applicable enter 0"
      );
    } else {
      travelExpenses >= 2800 || dinningExpenses >= 2800
        ? this.setState({
            creditCardIndex: 0
          })
        : groceryExpenses >= 2500 || gasExpenses > 1500
        ? this.setState({
            creditCardIndex: 3
          })
        : travelExpenses < 2800 || gasExpenses < 1500
        ? this.setState({
            creditCardIndex: 6
          })
        : groceryExpenses < 2500 || dinningExpenses < 2800
        ? this.setState({
            creditCardIndex: 8
          })
        : this.setState({
            creditCardIndex: 9
          });
      this.setState({
        isFormSubmitted: true
      });
    }
  };

  render() {
    const { creditCardIndex, creditCards, isFormSubmitted } = this.state;

    if (isFormSubmitted) {
      console.log("The Form was Submitted!!");
      if (creditCardIndex !== null && creditCards.length) {
        let cards = creditCards[creditCardIndex];
        console.log("cards", cards);
        return (
          <React.Fragment>
            <img
              src={cards.card_image_url}
              alt="credit cards"
              className="creditCards"
            />{" "}
            <br />
            <span className="creditCardsName"> Card name: </span>{" "}
            <span className="cardsReviews"> {cards.card_name} </span> <br />{" "}
            <span className="creditCardsName"> Card Reviews: </span>{" "}
            <span className="cardsReviews"> {cards.card_review_text} </span>{" "}
            <br />
            <span className="linkBackHome">
              Thank you for submitting the form -->{" "}
              <Link to="/" id="link">
                Home
              </Link>
            </span>
          </React.Fragment>
        );
      }
    } else {
      return (
        <React.Fragment>
          <div className="wrapper">
            <div className="container_left">
              <div className="cards">
                <img className="cardOne" alt="" />
                <div className="cardText">
                  <span className="name"> Name: </span>
                  <span id="span1"> Chase Sapphire Reserve </span> <br />
                  <span className="name"> Good: </span>
                  <span id="span2"> Travel and Dinning </span> <br />
                  <span className="name"> Credit Score: </span>
                  <span id="span3"> Excellent </span>
                </div>
              </div>
              <div className="cards">
                <img className="cardTwo" alt="" />
                <div className="cardText">
                  <span className="name"> Name: </span>
                  <span id="span1"> Chase Sapphire Preferred </span> <br />
                  <span className="name"> Good: </span>
                  <span id="span2"> Dining and Travel </span> <br />
                  <span className="name"> Credit Score: </span>
                  <span id="span3"> Good </span>
                </div>
              </div>
              <div className="cards">
                <img className="cardThree" alt="" />
                <div className="cardText">
                  <span className="name"> Name: </span>
                  <span id="span1"> SouthWest Rapid Rewards </span> <br />
                  <span className="name"> Good: </span>
                  <span id="span2"> Travel and Companion Pass </span> <br />
                  <span className="name"> Credit Score: </span>
                  <span id="span3"> Excellent </span>
                </div>
              </div>
              <div className="cards">
                <img className="cardFive" alt="" />
                <div className="cardText">
                  <span className="name"> Name: </span>
                  <span id="span1"> Citi Double Cash </span> <br />
                  <span className="name"> Good: </span>
                  <span id="span2"> Unlimited 2 % Cashback </span> <br />
                  <span className="name"> Credit Score: </span>
                  <span id="span3"> Good </span>
                </div>
              </div>
            </div>
            <div className="container_right">
              <form className="form">
                <h5>- Which credit card is best for you ? </h5>
                <label> Travel Expenses </label> <br />
                <input
                  name="travelExpenses"
                  type="number"
                  num="0"
                  autoFocus
                  onChange={this.handleOnChange}
                  required
                />
                <br />
                <label> Dinning Expenses </label> <br />
                <input
                  name="dinningExpenses"
                  type="number"
                  num="0"
                  onChange={this.handleOnChange}
                  required
                />
                <br />
                <label> Gas Expenses </label> <br />
                <input
                  name="gasExpenses"
                  type="number"
                  num="0"
                  onChange={this.handleOnChange}
                  required
                />
                <br />
                <label> Grocery Expenses </label> <br />
                <input
                  name="groceryExpenses"
                  type="number"
                  num="0"
                  onChange={this.handleOnChange}
                  required
                />
                <br />
                <input type="submit" onClick={e => this.submitForm(e)} /> <br />
                <span>
                  <span id="start"> * </span> Enter your estimated yearly
                  expenses for each category.
                </span>
              </form>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Rewards_Profile;

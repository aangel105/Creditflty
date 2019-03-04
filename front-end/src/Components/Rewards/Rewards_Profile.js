import React, { Component } from "react";
import axios from "axios";
import "./Rewards_Profile.css";
import "../Home/Home.css";

class Rewards_Profile extends Component {
  constructor() {
    super();
    this.state = {
      travelExpenses: [],
      dinningExpenses: [],
      gasExpenses: [],
      groceryExpenses: [],
      otherExpenses: [],
      creditCards: [],
      creditCardIndex: null,
      message: "",
      isFormSubmited: false
    };
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () => {
    axios
      .get("/creditcards")
      .then(res => {
        this.setState({ creditCards: res.data.data });
      })
      .catch(err => {
        this.setState({ message: "Error retrieving creditcards" });
        throw err;
      });
  };

  submitForm = e => {
    e.stopPropagation();
    e.preventDefault();
    const {
      travelExpenses,
      dinningExpenses,
      gasExpenses,
      groceryExpenses,
      otherExpenses,
      message
    } = this.state;
    if (travelExpenses >= 2800 || dinningExpenses >= 2800) {
      this.setState({ creditCardIndex: 0 });
    } else {
      this.setState({
        message: message
      });
    }
    if (groceryExpenses > 5000 || gasExpenses > 5000) {
      this.setState({ creditCardIndex: 3 });
    }

    if (travelExpenses < 1000 && otherExpenses > 3000) {
      this.setState({ creditCardIndex: 5 });
    }
    this.setState({
      isFormSubmited: true
    });
  };

  render() {
    const { creditCardIndex, creditCards, isFormSubmited } = this.state;
    if (isFormSubmited) {
      console.log("submitted");
      if (creditCardIndex !== null && creditCards.length) {
        let oneCard = creditCards[creditCardIndex];
        console.log("allcards", oneCard);
        return (
          <div>
            <img
              src={oneCard.card_image_url}
              alt="credit cards"
              width="200px"
              height="200px"
            />
            <p>Card name: {oneCard.card_name}</p>
            <p>Card Reviews: {oneCard.card_review_text}</p>
          </div>
        );
      }
      return null;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <div className="header">
              <p className="header_paragraph">
                Spend <span className="arrow1"> > </span>{" "}
                <span className="earn">Earn</span>{" "}
                <span className="arrow1"> > </span> Travel
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="container_left">
              <div className="cards">
                <img className="cardOne" alt="" />
                <div className="cardText">
                  <span className="name"> Name:</span>
                  <span id="span1"> Chase Saphire Reserve</span>
                  <br />
                  <span className="name"> Good:</span>
                  <span id="span2"> Travel and Dinning</span>
                  <br />
                  <span className="name">Credit Score:</span>
                  <span id="span3"> Excellent </span>
                </div>
              </div>
              <div className="cards">
                <img className="cardTwo" alt="" />
                <div className="cardText">
                  <span className="name"> Name:</span>
                  <span id="span1"> Chase Saphire Preferred</span>
                  <br />
                  <span className="name"> Good:</span>
                  <span id="span2"> Dining and Travel</span>
                  <br />
                  <span className="name">Credit Score:</span>
                  <span id="span3"> Good </span>
                </div>
              </div>
              <div className="cards">
                <img className="cardThree" alt="" />
                <div className="cardText">
                  <span className="name"> Name:</span>
                  <span id="span1"> SouthWest Rapid Rewards</span>
                  <br />
                  <span className="name"> Good:</span>
                  <span id="span2"> Travel and Companion Pass</span>
                  <br />
                  <span className="name">Credit Score:</span>
                  <span id="span3"> Excellent </span>
                </div>
              </div>
              <div className="cards">
                <img className="cardFour" alt="" />
                <div className="cardText">
                  <span className="name"> Name:</span>
                  <span id="span1"> United Explorer</span>
                  <br />
                  <span className="name"> Good:</span>
                  <span id="span2"> Travel and United Flyer</span>
                  <br />
                  <span className="name">Credit Score:</span>
                  <span id="span3"> Excellent </span>
                </div>
              </div>
              <div className="cards">
                <img className="cardFive" alt="" />
                <div className="cardText">
                  <span className="name"> Name:</span>
                  <span id="span1"> Citi Double Cash</span>
                  <br />
                  <span className="name"> Good:</span>
                  <span id="span2"> Unlimited 2% Cashback</span>
                  <br />
                  <span className="name">Credit Score:</span>
                  <span id="span3"> Good </span>
                </div>
              </div>
              <div className="cards">
                <img className="cardSix" alt="" />
                <div className="cardText">
                  <span className="name"> Name:</span>
                  <span id="span1"> Chase Freedom</span>
                  <br />
                  <span className="name"> Good:</span>
                  <span id="span2"> Rotaring Category</span>
                  <br />
                  <span className="name">Credit Score:</span>
                  <span id="span3"> Good </span>
                </div>
              </div>
            </div>

            <div className="container_right">
              <form className="form">
                <label>Travel Expenses</label>
                <br />
                <input
                  name="travelExpenses"
                  type="number"
                  num="0"
                  onChange={this.handleOnChange}
                  required
                />
                <br />
                <label>Dinning Expenses</label>
                <br />
                <input
                  name="dinningExpenses"
                  type="number"
                  num="0"
                  onChange={this.handleOnChange}
                  required
                />
                <br />
                <label>Gas Expenses</label>
                <br />
                <input
                  name="gasExpenses"
                  type="number"
                  num="0"
                  onChange={this.handleOnChange}
                  required
                />
                <br />
                <label>Grocery Expenses</label>
                <br />
                <input
                  name="groceryExpenses"
                  type="number"
                  num="0"
                  onChange={this.handleOnChange}
                  required
                />
                <br />
                <label>Other Expenses</label>
                <br />
                <input
                  name="otherExpenses"
                  type="number"
                  num="0"
                  onChange={this.handleOnChange}
                  required
                />
                <br />
                <br />
                <input type="submit" onClick={e => this.submitForm(e)} />
                <br />
                <span>
                  * Enter your estimated yearly expenses for each category.
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

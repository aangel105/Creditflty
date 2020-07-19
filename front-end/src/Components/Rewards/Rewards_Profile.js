import React, { Component } from "react";
import axios from "axios";
import "./Rewards_Profile.css";
import "../Home/Home.css";

// Components
import Card from "./Card";
import Form from "./Form";

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
      message: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount = () => {
    const {
      travelExpenses,
      dinningExpenses,
      gasExpenses,
      groceryExpenses,
    } = this.state;
    axios
      .get("/creditcards")
      .then((res) => {
        this.setState({
          creditCards: res.data.data,
        });
      })
      .catch((err) => {
        this.setState({
          message: "Error retrieving creditcards",
        });
        throw err;
      });

    axios
      .post("/addedExpenses", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */* ",
          "Content-type": "application/json",
        },
        travelExpenses: JSON.stringify(travelExpenses),
        dinningExpenses: JSON.stringify(dinningExpenses),
        gasExpenses: JSON.stringify(gasExpenses),
        groceryExpenses: JSON.stringify(groceryExpenses),
      })
      .then((res) => {
        console.log(res);
      });
  };

  submitForm = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const {
      travelExpenses,
      dinningExpenses,
      gasExpenses,
      groceryExpenses,
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
            creditCardIndex: 0,
          })
        : groceryExpenses >= 2500 || gasExpenses > 1500
        ? this.setState({
            creditCardIndex: 3,
          })
        : travelExpenses < 2800 || gasExpenses < 1500
        ? this.setState({
            creditCardIndex: 6,
          })
        : groceryExpenses < 2500 || dinningExpenses < 2800
        ? this.setState({
            creditCardIndex: 8,
          })
        : this.setState({
            creditCardIndex: 9,
          });
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  render() {
    const { creditCardIndex, creditCards, isFormSubmitted } = this.state;

    if (isFormSubmitted) {
      if (creditCardIndex !== null && creditCards.length) {
        let cards = creditCards[creditCardIndex];
        return (
          <Card
            cardImage={cards.card_image_url}
            cardName={cards.card_name}
            cardReview={cards.card_review_text}
          />
        );
      }
    } else {
      return (
        <Form
          handleOnChange={this.handleOnChange}
          handleSubmit={this.submitForm}
        />
      );
    }
  }
}

export default Rewards_Profile;

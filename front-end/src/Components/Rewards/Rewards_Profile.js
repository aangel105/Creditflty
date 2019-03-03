import React, { Component } from "react";
import axios from "axios";
import "./Rewards_Profile.css";
import "../Home/Home.css";

class Rewards_Profile extends Component {
  constructor() {
    super();
    this.state = {
      travel_expenses: [],
      dinning_expenses: [],
      gas_expenses: [],
      grocery_expenses: [],
      others_expenses: [],
      credit_Cards: [],
      credit_Card_Index: null,
      message: "",
      isFormSubmited: false
    };
  }

  handleTravelSpend = e => {
    this.setState({ travel_expenses: e.target.value });
  };

  hanldeDinningSpend = e => {
    this.setState({ dinning_expenses: e.target.value });
  };

  hanldeGasSpend = e => {
    this.setState({ gas_expenses: e.target.value });
  };

  hanldeGrocerySpend = e => {
    this.setState({ grocery_expenses: e.target.value });
  };

  handleOtherSpend = e => {
    this.setState({ others_expenses: e.target.value });
  };

  componentDidMount = () => {
    axios
      .get("/creditcards")
      .then(res => {
        this.setState({ credit_Cards: res.data.data });
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
      travel_expenses,
      dinning_expenses,
      gas_expenses,
      grocery_expenses,
      others_expenses,
      message
    } = this.state;
    if (travel_expenses >= 2800 || dinning_expenses >= 2800) {
      this.setState({ credit_Card_Index: 0 });
    } else {
      this.setState({
        message: message
      });
    }
    if (grocery_expenses > 5000 || gas_expenses > 5000) {
      this.setState({ credit_Card_Index: 3 });
    }

    if (travel_expenses < 1000 && others_expenses > 3000) {
      this.setState({ credit_Card_Index: 5 });
    }
    this.setState({
      isFormSubmited: true
    });
  };

  render() {
    const { credit_Card_Index, credit_Cards, isFormSubmited } = this.state;
    if (isFormSubmited) {
      console.log("submitted");
      if (credit_Card_Index !== null && credit_Cards.length) {
        let oneCard = credit_Cards[credit_Card_Index];
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
                Spend <span className="arrow1"> > </span> Earn{" "}
                <span className="arrow1"> > </span> Travel
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="container_left">
            {/* <span className="containerLeftHeader">Popular Credit Cards</span> */}
            <div className='cards'>
            <img className="cardOne" alt=""/>
            </div>
            <div className='cards'>
            <img className="cardTwo" alt="" />
            </div>
            <div className='cards'>
            <img className="cardThree" alt="" />
            </div>
            <div className='cards'>
            <img className="cardFour" alt="" />
            </div>
            <div className='cards'>
            <img className="cardFive" alt="" />
            </div>
            <div className='cards'>
            <img className="cardSix" alt="" />

            </div>
            </div>
            <div className="container_right">
              <form className="form">
                <label>Travel Expenses</label>
                <br />
                <input
                  type="number"
                  num="0"
                  onChange={this.handleTravelSpend}
                  required
                />
                <br />
                <label>Dinning Expenses</label>
                <br />
                <input
                  type="number"
                  num="0"
                  onChange={this.hanldeDinningSpend}
                  required
                />
                <br />
                <label>Gas Expenses</label>
                <br />
                <input
                  type="number"
                  num="0"
                  onChange={this.hanldeGasSpend}
                  required
                />
                <br />
                <label>Grocery Expenses</label>
                <br />
                <input
                  type="number"
                  num="0"
                  onChange={this.hanldeGrocerySpend}
                  required
                />
                <br />
                <label>Other Expenseses</label>
                <br />
                <input
                  type="number"
                  num="0"
                  onChange={this.handleOtherSpend}
                  required
                />
                <br />
                <br />
                <input type="submit" onClick={e => this.submitForm(e)} />
                <br/>
                <span>* Enter your estimated yearly expenses for each category.</span>
              </form>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Rewards_Profile;

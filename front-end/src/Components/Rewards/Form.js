import React from "react";

const Form = ({ handleOnChange, handleSubmit }) => {
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
              onChange={handleOnChange}
              required
            />
            <br />
            <label> Dinning Expenses </label> <br />
            <input
              name="dinningExpenses"
              type="number"
              num="0"
              onChange={handleOnChange}
              required
            />
            <br />
            <label> Gas Expenses </label> <br />
            <input
              name="gasExpenses"
              type="number"
              num="0"
              onChange={handleOnChange}
              required
            />
            <br />
            <label> Grocery Expenses </label> <br />
            <input
              name="groceryExpenses"
              type="number"
              num="0"
              onChange={handleOnChange}
              required
            />
            <br />
            <input type="submit" onClick={handleSubmit} /> <br />
            <span>
              <span id="start"> * </span> Enter your estimated yearly expenses
              for each category.
            </span>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;

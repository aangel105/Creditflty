import React, { Component } from 'react';
import axios from 'axios';
import './Rewards_Profile.css';

class Rewards_Profile extends Component {
    constructor() {
        super()
        this.state = {
            travel_expenses: [],
            dinning_expenses: [],
            gas_expenses: [],
            grocery_expenses: [],
            others_expenses: [],
            credit_Cards: [],
            credit_Card_Index: null,
            message: '',
            isFormSubmited: false,
        }
    }

    handleTravelSpend = (e) => {
        this.setState({ travel_expenses: parseInt(e.target.value) })
    }

    hanldeDinningSpend = (e) => {
        this.setState({ dinning_expenses: e.target.value })
    }

    hanldeGasSpend = (e) => {
        this.setState({ gas_expenses: e.target.value })
    }

    hanldeGrocerySpend = (e) => {
        this.setState({ grocery_expenses: e.target.value })
    }

    handleOtherSpend = (e) => {
        this.setState({ others_expenses: e.target.value })
    }

    componentDidMount = () => {
        axios.get('/creditcards')
            .then(res => {
                console.log('credit cards:', res.data.data);
                this.setState({ credit_Cards: res.data.data });
            })
            .catch(err => {
                this.setState({ message: 'Error retrieving creditcards' })
                throw err;
            })
    }

    submitForm = (e) => {
        console.log(e)
        e.stopPropagation();
        e.preventDefault();
        const { travel_expenses, dinning_expenses, gas_expenses, grocery_expenses, others_expenses, credit_Cards, credit_Card_Index, message } = this.state;
        if (travel_expenses >= 2800 || dinning_expenses >= 2800) {
            this.setState({ credit_Card_Index: 0 })
            this.setState({credit_Card_Index: 2 })
            console.log('card index', credit_Card_Index)
        }
        else {
            this.setState({
                message: message,
            })
        }
        if (grocery_expenses > 5000 || gas_expenses > 5000) {
            this.setState({ credit_Card_Index: 3 })
        }

        if (travel_expenses < 1000 && others_expenses > 3000) {
            this.setState({ credit_Card_Index: 5 })
        }
        this.setState({
            isFormSubmited: true
        })
    }

    render() {
        const { credit_Card_Index, credit_Cards, isFormSubmited } = this.state

        if (isFormSubmited) {
            console.log('submitted', credit_Card_Index, credit_Cards, isFormSubmited)
            if (credit_Card_Index !== null && credit_Cards.length) {
                let oneCard = credit_Cards[credit_Card_Index]
                console.log('allcards', oneCard);
                return (
                    <div>
                        <img src={oneCard.card_image_url} width="200px" height="200px" />
                        <p>Card name: {oneCard.card_name}</p>
                        <p>Card Reviews: {oneCard.card_review_text}</p>
                    </div>
                )
            }
            return null;
        }
        else {
            return (
                <div>
                    <h3 className='rewards_header'>Maximizing Credit Cards to Become Points-Rich</h3>
                    <p className="rewards_Instructions">* Please enter your projected yearly expenses on each categories</p>

                    <div className="rewardsExpensesDiv">
                        <form className="expensesForm">
                            <label ><b>Travel Expenses</b></label><br />
                            <input onChange={this.handleTravelSpend} type='number' min="0" required /><br />

                            <label ><b>Dinning Expenses</b></label><br />
                            <input onChange={this.hanldeDinningSpend} type='number' min="0" required /><br />

                            <label ><b>Gas Expenses</b></label><br />
                            <input onChange={this.hanldeGasSpend} type='number' min="0" required /><br />

                            <label ><b>Groceries Expenses</b></label><br />
                            <input onChange={this.hanldeGrocerySpend} type='number' min="0" required /><br />

                            <label ><b>Other Expenses</b></label><br />
                            <input onChange={this.handleOtherSpend} type='number' min="0" required /><br />

                            <input id='button' type="submit" onClick={e => this.submitForm(e)} value="Submit" /> <br />
                        </form>
                    </div>
                    <br />
                </div>
            )
        }
    }
}

export default Rewards_Profile;
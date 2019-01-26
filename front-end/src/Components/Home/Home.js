import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            score: '',
            rewards: '',
        }
    }
    handleScoreButton = (e) => {
        let { score } = this.state;
        e.preventDefault();
    }

    render() {
        return (

            <div>


                <div class="image_one"></div>

                <div className='home_content'>
                    <h4 className='content_header'>Credit Card Welcome Bonuses</h4>
                    <p className='content_paragraph'>The easiest way to accumulate thousands of points and miles is by signing up for new credit cards and meeting the minimum spend requirements of their welcome bonuses.
                    With increasing competition among card issuers, welcome bonuses are becoming more lucrative than ever before. For instance, there are six cards currently offering 100,000-point welcome bonuses. Let that sink in for a moment — six cards alone can bring your balance up by over half a million points.
                    And that’s only the beginning; there are plenty more amazing bonuses out there. We regularly update our roundup of the best current sign-up offers in our Top Travel Rewards Cards guide, so that’s a good starting point if you need help finding a good card to pick. And there are plenty of ways to easily meet minimum spend requirements even if you have low monthly expenses, such as pre-paying some regular expenses like utilities.
                    </p>
                </div>
                <div className="image_two"></div>

                <div className='home_content2'>
                    <p className='content_paragraph2'>“The world is a book and those who do not travel read only one page.”</p>
                </div>
                
                <div className='image_three'></div>

                <div className='home_content3'>
                    <h4 className='content_header3'>Maximize your purchases</h4>
                    <p className='content_paragraph3'>
                        Put all of your expenses on your credit cards and then make sure to pay off your entire balance each month or else the interest paid will most likely negate any of the points you accrued. Use cash only when you absolutely have to! In general, though, if a merchant is going to make you pay a 3% fee to use a credit card (like most universities and some tax services do these days), it’s not worth it in my opinion.
                        Deciding which credit card to use at specific retailers can be a bit challenging, especially when some cards like the Chase Freedom change the value of different categories every quarter.
                    </p>
                </div>
                <div className="last_image"></div>
            </div>
        )
    }
}

export default Home;
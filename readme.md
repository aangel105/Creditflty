
 # Creditfly

 Creditfly is an application where users have the ability to check, improve and understand their credit scores. Creditfly provide the user the opportunity to utilize their daily expenses to get cheap vacations around the world by tracking users expenses and recommend specific credit cards based on their expenses categories 

# Database Schema

. Users 

 -user have many credit cards, and expenses

. Credit cards

 -users credit cards(cash-back, travel, hotel) 

 -credit cards have many users and many expenses

. Expenses

 -expenses can have one users
 -expenses can have multiple credit cards

# Front-end

. /users

  -render all users from database

./aboutUs

  -show users our mission and how our site work

./login 

  -allows users to login and track their activities 

./signup

  -give the ability to signup to creditfly and revice special services

./creditscore

  -render a page with tips on how to increase your credit score

  -link to creditkarma where users can check their scores

./rewards

 -shows users the rules to follow in order to be successful in credi cards rewards

 -shows type of vacations the users can have and the amount of points needed to book flights 

 -links to credit cards offers and the amount of points 

 -links to relate articles and blogs that will expand the users knowledge

# Back-end

./users
 -get a list of user from database 

./creditcards
 -show a table of credit cards their points and their categories ex: cashback

./expenses
 -shows the list of expenses acquired from users 

 
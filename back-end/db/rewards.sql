DROP DATABASE IF EXISTS creditfly;
CREATE DATABASE creditfly;

\c creditfly;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL
);


CREATE TABLE expenditure (
    id SERIAL PRIMARY KEY, 
    travel_expenses INTEGER NOT NULL,
    dinning_expenses INTEGER NOT NULL,
    rent_expenses INTEGER NOT NULL,
    gas_expenses INTEGER NOT NULL,
    others_expenses INTEGER NOT NULL,
    users_id INTEGER REFERENCES users(id)
);

CREATE TABLE creditcards (
    id SERIAL PRIMARY KEY, 
    card_name VARCHAR,
    card_ratings INTEGER, 
    card_review_text VARCHAR,
    card_image_url VARCHAR,
    expenditure_id INTEGER REFERENCES expenditure(id) 
);

INSERT INTO users (first_name, last_name, username, password_digest)
VALUES ('Angel', 'Arias', 'angelarias105@gmail.com', 'c4q-access-code'),
('Juan', 'Perez', 'juanperez2@live.com', '12345'),
('Sofia', 'Soto', 'mypassionproject1@hotmail.com', 'creditfly2018'),
('Liz', 'Hernandez', 'hernandez.1@hotmail.com', '123456'),
('James', 'Brown', 'james2018@gmail.com','mackbook2018'),
('Arcangel', 'Diaz', 'lamaravilla@live.com','arcangel123'),
('Angelica', 'Veloz', 'veloz.angelica1@hotmail.com','dancing'),
('Tito', 'Vortez', 'titoVortez@gmail.com', 'tito12345'),
('Kathy', 'Reyes', 'kathy2018@live.com', 'makeup2018'),
('Moise', 'bravo', 'bravo.moise2@hotmail.com', 'bravo2019');


INSERT INTO expenditure (travel_expenses, dinning_expenses, rent_expenses, gas_expenses, others_expenses, users_id)
VALUES (200,500,13000,1000,5500, 3),
(2000,1500,8000,0,4000,7),
(500,100,18000,350,1000,1),
(1500,1000,23000,0,2500,5),
(400,1700,6000,500,1800,2),
(2000,3500,13000,3000,1000,8),
(1000,4500,19000,3000,2000,6),
(5000,4500,1000,0,2000,10),
(5000,3000,10000,0,1000,9),
(0,5000,10000,4500,3000,4);

INSERT INTO creditcards (card_name, card_ratings, card_review_text, card_image_url, expenditure_id)
VALUES ('Chase Sapphire Reserve', 5, 'Execellent for travel and dining 3 pts per dollars', 'https://skift.com/wp-content/uploads/2016/09/chase-sapphire.jpg', 5),
('Platinum Delta SkyMiles', 5, 'Great for couple because it offer a companion pass every year', 'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/platinum-delta-skymiles.png',1),
('Citi Prestige', 4, 'Execellent for travel 4 night free for all hotel booking', 'https://mms.businesswire.com/media/20170717005286/en/600154/5/Citi_Prestige.jpg', 10),
('Chase Freedom', 5, 'Awesome for Grocery and Gas with Rotating Categories 5% back', 'http://moorewithmiles.com/wp-content/uploads/2017/09/IMG_1906.jpg', 2),
('American Express Platinum', 5, 'Execellent for travel, dining 5 pts per dollars on airfare, great perks', 'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/CardArt/My-Card/L-Desktop/platinum.png?CPS_CARD_SHOP_VER', 10),
('Jetblue Plus Card', 5, 'If you love jetblue, you will love this card', 'https://gif.barclaycardus.com/apply/img/jbm/card-plus-reflection-new.png', 9),
('Amex Premier Gold', 4, 'Great Sign up bonus and good categories', 'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/premier-rewards-gold.png', 7),
('Chase Ritz Carlton Rewards card', 5, 'Best Card for Hotels And Perks', 'http://www.travel-rebel.com/wp-content/uploads/2015/11/Ritz-Carlton_Rewards-Credit-Card.jpg', 3),
('Chase Southwest Rapid Reward', 4, 'Execellent for southwest Companion Pass', 'https://creditcards.chase.com/R-SWA/6000381/images/prem_card_right_wide.png', 4),
('Chase Sapphire Preferred', 5, 'Great for dining and travel', 'https://www.mybanktracker.com/news/wp-content/uploads/2016/03/Chase-Sapphire-Preferred-credit-card.jpg', 6);







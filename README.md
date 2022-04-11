# Exotals
This is a Clone of [AirBnb](https://www.airbnb.com). Access [Exotals](https://exotals.herokuapp.com/) and start your fun!.

[Exotals](https://exotals.herokuapp.com/) is the place to go to rent your dream car!

# Index
| [API Docs](https://github.com/Jesus-Elizalde/exotals/wiki/API-Documentation) | [Database Schema](https://github.com/Jesus-Elizalde/exotals/wiki/Database-Schema) | [Feature List](https://github.com/Jesus-Elizalde/exotals/wiki/Exotals-feature-list) | [Frontend Routes](https://github.com/Jesus-Elizalde/exotals/wiki/Frontend-Routes) |


# Technologies Used

![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg)    ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/git.svg)    ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/heroku.svg)    ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/javascript.svg)    ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/nodejs.svg)    ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/postgres.svg)    ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/react.svg)    

# Getting Started
1. Clone this repo.
* ```git clone https://github.com/Jesus-Elizalde/exotals.git```
2. Install dependencies in backend directory and frontend directory.
* ```npm install```
3. Create a POSTGRESSQL user with the CREATEDB and password in PSQL.
* ```CREATE USER <name> WITH CREATEDB PASSWORD <'password'>```
4. Create a .env file in the backend directory based on the .env.example found withing the respective directory.
5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_TOKEN, and your desired PORT(preferably 8000.)
6.Add the following proxy to your package.json file within your frontend directory, replacing or keeoing the 5000 port to match your PORT configuration found in your .env file.
* ```"proxy":"http://localhost:8000"```
7.Create Database, Migrate, and Seed models.
* ```npx dotenv sequelize db:create```
* * ```npx dotenv sequelize db:migrate```
* * ```npx dotenv sequelize db:seed:all```
8.Start the services in the backend directory.
* ```npm start```
9.Start the services in the frontend directory, which should open the project in your default browers, If not, navigate to (http://localhost:8000).
* ```npm start```
10.You can use the Demo user or create an account to begin using [Exotals](https://exotals.herokuapp.com/).

# Features
Loggind in users can perform the following actions.
* Add/View/Edit/Delete Cars
* Add/View/Edit/Delete Reviews



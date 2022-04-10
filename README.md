# PROJECT NAME

Movie Gallery

## Description

_Duration: Weekend Project_

This project allows the storage of movie information. Upon load, a list of database stored movies is rendered on the DOM. Clicking on an individual movie will bring up the details associated with that movie. The project also allows the user to add new movies to the database and fill in the information to appear with the new movie.

### Screenshots
<img width="1791" alt="Screen Shot 2022-04-10 at 4 38 51 PM" src="https://user-images.githubusercontent.com/96275396/162640991-e43c2b35-63f6-4497-86f8-27438d1c0505.png">

<img width="1790" alt="Screen Shot 2022-04-10 at 4 39 14 PM" src="https://user-images.githubusercontent.com/96275396/162640994-58a5a9f4-b743-47ee-ab70-9228b67602b0.png">

<img width="1786" alt="Screen Shot 2022-04-10 at 4 40 40 PM" src="https://user-images.githubusercontent.com/96275396/162641021-9e3b1007-7f5b-479c-8b7b-6c97b198871a.png">

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Express.js](https://expressjs.com/)
- [Redux](https://redux.js.org/)
- [Material UI](https://v4.mui.com/)
- [Postgres](https://www.postgresql.org/download/)
- [Redux-Saga](https://redux-saga.js.org/)

## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `datavbase.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`
4. Run `postgres -D /usr/local/var/postgres for Intel, M1 is postgres -D /opt/homebrew/var/postgres` in your terminal
to start the database
5. Run `npm run server` in your terminal to start the server.
6. Run `npm run client` in your terminal to open the client.


## Usage

Click on a movie to view the details of the movie. Clicking on the add movie button will open a form to submit a movie title, a link to the movie poster, and a description of the movie. Upon submission, the new movie will be added to the list and the details will become available.


## Built With

node.js
express.js
axios.js
react.js
material ui v4
postgres
redux.js
redux-saga

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [brandon.m.mccarty12@gmail.com](www.google.com)


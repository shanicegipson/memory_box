# Memory Box
## Description
*Duration: 2 Week Sprint*

Instagram, Facebook and even an iphone all have features that their users to create and share photos with their loved ones. Unfortunately these platforms require a membership to view these precious moments. Fortunately with the creation of memory box you are able to share your photos with your friends and family even if they don't have an account.

Click here to view my project deployed on heroku: https://shrouded-depths-21684.herokuapp.com/#/home

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Installation
If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `memory_box`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!


## Usage
### User
* The user will **Log in** or **Sign up** and after successful completion are redirected to their personalized profile page
* The user can upload an unlimited amount photos to their profiles and share a personalized link to anyone they choose

### Guest
* Once guest has recieved the url link from the user the guest copies it into thier 


## Built With
This version uses React, Redux, Express, Passport, and PostgreSQL, AWS S3 (a full list of dependencies can be found in `package.json`).


##Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) in Kansas City who equipped and helped me to make this application a reality. Especially my cohort in Isurus and instructors Myron and Scott/


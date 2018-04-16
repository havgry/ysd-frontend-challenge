# My approach to solving the challenge
Even though keeping state in a parent component would suffice in this case, I chose to use Redux and set up routing because it creates a solid foundation to build upon. Since the backend was painfully slow (during development I reduced the time in `randomWait` to keep me from going insane), I also added a very rudimentary caching mechanism in the frontend, so the same data isn't being fetched more than once.

Once the core of the application was working (routing for the two pages, fetching, storing and displaying data), I focused on creating a "responsive table", which I have to admit wasn't that straightforward. A good ol' table is not easily collapsed in a semantically meaningful or responsive way, so I ended up using flexbox and collapsing the columns into something not very table-like. While simple, I think it works but depending on the use case it could very well be, that a regular table with horizontal overflow and perhaps the first column fixed would be a better solution (depending on the amount of data).

I used the same webfont and base colors as Yousee.dk and generally used that as an inspiration (especially in terms of the cards).

I would have liked to spend more time on refining each CSS component (and utilizing SCSS better) and building a CSS foundation - not being able to use a responsive grid framework really limited my time spent on the layout and working with the user data.

# Coding Challenge
We want you to create a simple app that lists some users in a table, and click each user to display some additional information about that given user. How much additional information you want to display for a given user, is up to you.
We have provided you with a simple backend and a boilerplate React app, that should contain everything for you to get started. The list must contain the:

- users name
- username
- email
- phone number 
- company

## Using the API
The API runs on a simple express backend, and runs on localhost port 1337, and has two endpoints

* `/api/users`
 Returns a JSON collection with 10 users
* `/api/user/USER_ID`
 Returns a specific user. `USER_ID` represents the id of the single user you want to fetch

## Restrictions
* You may not use a CSS framework such as Bootstrap

## Requirements
* You must use React
* The app and table must be responsive, with a “mobile-first” approach in mind.
* You must use appropriate YouSee colors. You can find colors by inspecting any page under the https://yousee.dk/ domain.
* The users must be fetched asynchronously using JavaScript.
* Unfortunately the backend is sometimes rather slow. So you must display a loading indicator while you're loading the data.
* You must deliver the app in a git repository. You decide if you want to use GitHub, Bitbucket, GitLab or whatever. 

## Starting the application
* Unzip the project
* Open your terminal and navigate to the folder where you extracted the project to
* Run `npm install` to install some dependencies
* Open the project in your text editor
* Start the backend by running `npm start backend` and then start the frontend by running `npm start frontend` in another window
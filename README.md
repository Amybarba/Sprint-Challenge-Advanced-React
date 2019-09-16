# Sprint Challenge: Advanced React - Women's World Cup

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components, custom hooks, and testing. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that consumes data from an API using a custom hook, displays that data on the DOM, and tests your React components.

The data you will get back from the server will be the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide - https://googletrends.github.io/data/.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the `ANSWERS.md` file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [X] Why would you use class component over function components (removing hooks from the question)?

* Because class components have access to the React functionality where as without hooks regular function components were limited.
 i.e. you can reuse component logic 

- [X] Name three lifecycle methods and their purposes.

* componentDidMount - this is where your component is mounted but also using AJAX(AJAX = Asynchronous JavaScript And XML)
(I had to look that up and Jeremiah explained that fetch and axios are basically AJAX and then it all made sense)
 it guarantees that it will update. Also you can add event listeners, draw on elements and initialize a masonry grid with this method. It loads in data to your component.

componentDidUpdate - This will allow your component to react to changes that have occurred thus update

Render - This is the fun part because it shows if your coding worked to bring in the information you wanted in your class component. This is where your JSX(JavaScript Expressions)(Needed to look that up as well and understand it is basically UI written within your class component) is returned for your component.


- [X] What is the purpose of a custom hook?

* In order to create a reusable way to get information back on the behavior of your code; managing event listeners, controlled inputs, 
This is accomplished by using the useState hook to track behavior and update result.


- [X] Why is it important to test our apps?

*  In order to get a job developing you will be asked to test and probably often. As a practice for any job testing a “finished” product is just practical and important so that you have allowed for the success of that product. Testing in coding helps find any possible bugs faster or gives you peace of mind you have not found any bugs. Much like using console log to test if your result is working testing also helps to make sure it is not breaking somewhere. Testing also helps us to trust what we have written and rewritten and allows others to see why we wrote it by providing documentation. It also improves our ability to write code. 

## Project Set Up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add TL as collaborator on Github.
- [X] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [X] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Run `yarn` to download dependencies.
- [X] Run the server using `yarn start` or `node server.js`.
- [X] In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
- [X] Still inside the `client` folder run `yarn start` to run the client application.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
- [ ] Display the player data you receive from the API
- [ ] Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
- [ ] Write integration tests for your React components

## Stretch Problems

- [ ] Implement another custom hook
- [ ] Use a graphing library to graph the data you received from the API

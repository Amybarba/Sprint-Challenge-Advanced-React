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

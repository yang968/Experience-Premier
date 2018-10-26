# ExP

[Live Link](https://experience-premier.herokuapp.com/#/)

## Background & Overview

ExP is a demo B2B website that provides a customer service management platform where users can create tasks by either recording a conversation or submitting transcripts. When an employee submits a task, text data is sent to the backend. It will then be passed to IBM Watson's Natural Language Understanding API while requesting for certain features such as 'sentiment' or 'keywords'. 

The analysis results will be displayed when the user goes back to the main page. All the data will be displayed in descending order. Managers, executives, and HR representatives will be able to view cumulative data of their team, an employee's tasks and assess each employee’s performance and customer satisfaction. Employees can view their own data as well.

## Technologies

`HTML5` / `SCSS` / `MongoDB` / `Express.js` / `React.js` / `Redux` / `Node.js` / `JavaScript` / `Chart.js` / 
`IBM Watson's API` / `Animate CSS`

## Features
Employee login displays their own data and previous calls. They can select a specific call and display that call's data.

![picture](images/dashboard.gif)

Manager login displays their team's data as well as the manager's previous calls. Manager can click on an employee to render the view the employee's data.

![picture](images/signin.gif)

Employees and Managers can both record a call or a conversation

## Possible Future Implementations
+ Implement feature that allows managers to filter team data based on year, month, week, or day.
+ Expand positions above just a manager of a team. Display the data of entire branches and companies. Compare that data to data from companies within the same Industry.

## Team Members
Seungho Victor Yang, Nick Matison, Mark Lee, Jordan Yu

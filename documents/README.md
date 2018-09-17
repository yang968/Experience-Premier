# ExP Proposal 

Seungho Victor Yang, Nick Matison, Mark Lee, Jordan Yu

__CONTENTS:__ 
- [Background & Overview](https://github.com/yang968/ExP#background--overview) 
- [Functionality & MVP List](https://github.com/yang968/ExP#functionality--mvp-list) 
- [Technologies & Technical Challenges](https://github.com/yang968/ExP#technologies--technical-challenges) 
- [Work Completed](https://github.com/yang968/ExP#work-completed)
- [Project Timeline](https://github.com/yang968/ExP#project-timeline-goals) 
- [Establishing Customer Base](https://github.com/yang968/ExP#establishing-customer-base) 


## Background & Overview

ExP is a customer service management platform that provides employee performance data based on customer interaction records. When an employee completes a ticket, they will be able to submit transcripts or live conversation recordings, which will then be sent to the backend. Data will then be passed to IBM Watson’s text analysis API for sentiment analysis, which in turn will be returned to the application frontend to be visualized. Managers, executives, and HR representatives will be able to view the resulting data to assess each employee’s performance and customer satisfaction. 

ExP’s data visualizations will also show overall customer satisfaction for a company or team, and recommend keywords and behavioral trends which affected the outcome. Managers will be able to add or remove employees from their team. Users will not be able to view performance data for other users of the same management level. 

## Technologies & Technical Challenges

`HTML5` / `SCSS` / `MongoDB` / `Express.js` / `React.js` / `Redux` / `Node.js` / `JavaScript` / `D3.js` / 
`IBM Watson` / `React-Drop-Zone` / `Animate CSS`

__Anticipated Challenges:__

- Learning `Node`, `Express`, and `MongoDB` to handle the back-end and database
- Having `IBM Watson`’s speech to text analyzer display on the task page.
- Splitting the load between our front-end and our back-end
- Having the correct shapes of state for our data
- Using `IBM Watson`’s Tone Analyzer and charting it correctly for the user.

## Work Completed

As of Sunday 08/26/2018: 
- General 
  - Set up file tree structure 
- Back-end 
  - `MERN` back-end user authentication tutorial 
  - Head-start on set-up  
- Front-end
  - Head-start on splash page, front-end authentication, and login/sign-up modal 
  - Head-start on `IBM Watson` Speech to Text API calls

## Functionality & MVP List

1. __User Authentication__
    - New user can sign up
    - Returning users can Log in and Log out
    - Demo Login available to try the site in manager’s perspective
    - User are not allowed to use certain features without logging in
2. __Submit Data__
    - Users can submit data to backend (transcripts or speech-to-text)
    - Link with IBM Watson
    - Store the analyzed data to the database
3. __User type: Employee__
    - Can open task to input data
    - Have limited access to data and his/her own performance
4. __User type: Manager__
    - Can see all the Employees
    - Have access to each Employees data
    - Can see data visualization of overall results and performance
    - Can `Edit` or `Delete` Employee profile
5. __Bonus: Live Input__
    - Live recordings and live data tracking
    - Employee initializes at the start of a task
    - Chart or graph that displays live data to manager

## Project Timeline Goals

| Date              | Goals                                
| :-----------      | :---------------------------------------     
| `08.27 Monday`    | __Nick__: finish connecting the task page with the Watson speech to text. Have text rendering and have proper data being sent to the back-end for compounding. Start styling task page.
|                   | __Jordan__: set up site theme colors and fonts. Complete working splash page with functional frontend auth (sign up, log in, log out)
|                   | __Victor__: Handle merge conflicts. Check each member's progress and look into IBM Watson API.
|                   | __Mark__:  finish touching up backend. Help connecting frontend and backend.
| `08.28 Tuesday`   | __Nick__: finish styling task page and work on compounding data on the back-end.
|                   | __Jordan__: add animations to splash page and live page. Build basic employee dashboard components (profile, performance). Test component integration. 
|                   | __Victor__: Get ready for next MVP by making sure the data transferred from frontend to backend has has a template for smoother process.
|                   | __Mark__: connect task transcript with IBM watson and be able to retrieve the sentimental report.
| `08.29 Wednesday` | __Nick__: continue working on the back-end data structure
|                   | __Jordan__: build basic manager dashboard components (managed employees index, team performance). Test component integration. 
|                   | __Victor__: Make sure backend sends data with payloads for both manager and employee. Check everyone's progress and handle merge conflicts.
|                   | __Mark__:  help frontend to render visually appealing frontend.
| `08.30 Thursday`  | __Nick__: finish back-end data structure and start working on charts for employee data
|                   | __Jordan__: add manager dashboard screenshots to splash page.
|                   | __Victor__: Test the current implementation and handle edge cases.
|                   | __Mark__:  work on creating a useful chart using D3 and chart.js
| `08.31 Friday`    | __Nick__: Continue working on employee data chart and overall team charts
|                   | __Jordan__: add team public presence links and contact information. 
|                   | __Victor__: Make sure UI functionality on frontend and data verification
|                   | __Mark__:  work on creating a useful chart using D3 and chart.js
| `09.01 Saturday`  | __TEAM__: create seed data, debug 
|                   | __Nick__: finish overall team charts, debug all chart and data info check for edge cases for the data
|                   | __Jordan__: polish user interface 
|                   | __Victor__: Handle merge conflicts and check everyone's progress
|                   | __Mark__:  work on compilating that data charts and try to break the website.
| `09.02 Sunday`    | __TEAM__: create seed data, debug 
|                   | __Nick__: debug all chart and data info check for edge cases for the data
|                   | __Jordan__: polish user interface 
|                   | __Victor__: Test, Test, Test
|                   | __Mark__: work on final touches.
| `09.03 Monday`    | __TEAM__: submit project by 0900. Go out to a nice lunch 


## Establishing Customer Base
Seed data will be created by the project team (user accounts and customer interaction recordings). If time allows, friends and family will be invited to record conversations and provide feedback for ease of use and data visualization. 

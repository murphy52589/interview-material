## Objective

The objective of this exercise is to create a small React App that can display content from a REST API.

It is up to you how much time you spend on this exercise - however, we would suggest that you see how far you get in a few hours. If you don’t complete everything, that’s okay.

Please write up a few comments on how the code works and the direction you have taken along with anything you would do in future should you had more time.

## Method

The frontend application should be built in React with TypeScript. Beyond this, you are free to use any open-source libraries/frameworks that you wish.

At Line-Up we use the following libraries and tools on a regular basis; however, for the purpose of this exercise, you should use whatever you are most comfortable with.

- [Styled Components](https://styled-components.com/)
- [Redux](https://redux.js.org/basics/usage-with-react/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Grommet](https://v2.grommet.io/)

Your code should be commented and there should be a Readme to explain any steps required to run it.

Time should be spent on the design, look and feel of the React App to make the data presentable.

### API Details

Please use data from the [https://reqres.in](https://reqres.in/) API.

1) Please display a paginated list of users from: https://reqres.in/api/users?page=1

2) It should be possible to click on a user and see their details using the following api call: [https://reqres.in/api/user](https://reqres.in/api/users?page=1)/<int:id>/. Here is an example: https://reqres.in/api/users/2. 

The React App should display the information from this  API. The relevant API params should be shown in the URL, user ID / page number etc. and it should be fed back to the API request to [https://reqres.in](https://reqres.in/) - so changing the URL should result in new data being displayed in the app.

### Additional Considerations

- Please comment your code.
- Please feel free to leverage third party libraries - don't reinvent the wheel. If there is a particular reason that you chose a library and you wish to convey this please do so in code.
- This is a basic application but it you should approach as if it were the start of a project that will grow over time.
- We are interested in the methodology and structure over the functionality. If you are limited on time, please build only part of the solution but structure / comment it well.
- If you have time, you may add some testing, but we won’t mark you down if not – we respect your time and work/life balance. We don’t need to see tests for every component, just a flavour on how you would test a project.
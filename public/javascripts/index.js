import React from "react";
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from "./store/store";
import {createUser, login} from './actions/employee_actions';
import {createTask, fetchTask} from './actions/task_actions';


document.addEventListener("DOMContentLoaded", () => { 
  const root = document.getElementById("root")
  const store = configureStore();
  window.login = login;
  window.createUser = createUser;
  window.createTask = createTask;
  window.fetchTask = fetchTask;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root)
});
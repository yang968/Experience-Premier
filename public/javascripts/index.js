import React from "react";
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from "./store/store";
import {createUser, login, logout} from './actions/employee_actions';
import {createTask, fetchTask, deleteTask} from './actions/task_actions';

import "../stylesheets/index.scss";

document.addEventListener("DOMContentLoaded", () => { 
  const root = document.getElementById("root")
  let store;
  if (window.localStorage.currentUser != "undefined") {
    const preloadedState = {
      session: { currentUser: JSON.parse(window.localStorage.currentUser) }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.login = login;
  window.logout = logout;
  window.createUser = createUser;
  window.createTask = createTask;
  window.fetchTask = fetchTask;
  window.deleteTask = deleteTask;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root)
});
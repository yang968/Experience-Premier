import React from "react";
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from "./store/store";
import {createUser, login} from './actions/employee_actions';
import {createTask, fetchTask, deleteTask} from './actions/task_actions';

import "../stylesheets/index.scss";

document.addEventListener("DOMContentLoaded", () => { 
  const root = document.getElementById("root")
  window.currentUser = null
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.login = login;
  window.createUser = createUser;
  window.createTask = createTask;
  window.fetchTask = fetchTask;
  window.deleteTask = deleteTask;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root)
});
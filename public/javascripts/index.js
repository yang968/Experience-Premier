import React from "react";
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import Root from './components/root';
import configureStore from "./store/store";

import "../stylesheets/index.scss";

document.addEventListener("DOMContentLoaded", () => { 
  const root = document.getElementById("root")
  let store;
  let currentUser = window.localStorage.currentUser;
  if (currentUser && currentUser !== "undefined") {
    const preloadedState = {
      session: { currentUser: JSON.parse(currentUser) }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  
  ReactDOM.render(<div>
      <Favicon url="https://i.imgur.com/QhiuZTl.png" />
      <Root store={store} />
    </div>, root);
});
import React from 'react';
import {Route} from 'react-router-dom';
import TaskContainer from './tasks/task_container';

const App = () => (
  <Route path="/task" component={TaskContainer} />
)

export default App;
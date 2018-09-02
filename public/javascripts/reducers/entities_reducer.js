import {combineReducers} from 'redux';
import EmployeeReducer from './employee_reducer';
import TaskReducer from './task_reducer';
import ManagerReducer from './manager_reducer';

export default combineReducers({
  employees: EmployeeReducer,
  tasks: TaskReducer,
  managerTask: ManagerReducer
});
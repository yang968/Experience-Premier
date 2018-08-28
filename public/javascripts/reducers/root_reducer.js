import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';

export default combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer
});

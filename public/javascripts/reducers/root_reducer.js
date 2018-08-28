import { combineReducers } from "redux";
import AuthReducer from './auth_reducer';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';

export default combineReducers({
  tokens: AuthReducer,
  session: SessionReducer,
  entities: EntitiesReducer
});

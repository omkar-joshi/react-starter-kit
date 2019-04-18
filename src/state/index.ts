import { combineReducers } from 'redux';

import common from './common/reducer';
import demo from './demo/reducer';

export default combineReducers({
  common,
  demo,
});

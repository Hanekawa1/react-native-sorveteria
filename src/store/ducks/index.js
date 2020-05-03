import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import { reducer as auth } from './auth';
import { reducer as produto } from './produto';

export default combineReducers({ toast, auth, produto });

import { combineReducers } from 'redux';
import selectImageReducer from './selectImageReducer';
import saveStateReducer from './saveStateReducer';

export default combineReducers({
	selectedImage: selectImageReducer,
	state: saveStateReducer
});

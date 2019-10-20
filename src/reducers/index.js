import { combineReducers } from 'redux';
import selectImageReducer from './selectImageReducer';
import saveStateReducer from './saveStateReducer';
import getUrlReducer from './getUrlReducer';

export default combineReducers({
	selectedImage: selectImageReducer,
	state: saveStateReducer,
	imageUrl: getUrlReducer
});

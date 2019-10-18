import { combineReducers } from 'redux';
import selectImageReducer from './selectImageReducer';

export default combineReducers({
	selectedImage: selectImageReducer
});

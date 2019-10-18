export const selectImage = (image) => (dispatch) => {
	dispatch({ type: 'SELECT_IMAGE', payload: image });
};


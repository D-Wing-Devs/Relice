export const selectImage = (image) => (dispatch) => {
	dispatch({ type: 'SELECT_IMAGE', payload: image });
};

export const saveState = (state) => (dispatch) => {
	dispatch({ type: 'SAVE_STATE', payload: state });
};

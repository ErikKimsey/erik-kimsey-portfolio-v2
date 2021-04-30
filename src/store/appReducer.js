const initialState = {
  orientation: null,
};
export const appReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'SET_ORIENTATION':
          return {
              ...state,
              orientation: action.message,
          };
      default:
          return state;
  }
};

// Action creator
export const setOrientation = isLandscape => ({ type: 'SET_ORIENTATION', orientation: isLandscape });
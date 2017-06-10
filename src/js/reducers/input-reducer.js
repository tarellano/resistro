import * as actionConst from '../actions/action-const';

const initialState = {
  colorCode: {
    '1': 'brown',
    '2': 'black',
    '3': 'red'
  },
  opacity: 1,
  error: null,
  fetched: false
}

function inputReducer(state=initialState, action) {
  switch (action.type) {
    case actionConst.findColor: {
      return {
        ...state,
        fetched: true,
        opacity: 1,
        colorCode: action.colorCode
      };
    }
    case actionConst.findColorError: {
      return {
        ...state,
        opacity: 0.5,
        error: action.error
      }
    }
    default: {
      return state;
    }
  }
}

export default inputReducer;
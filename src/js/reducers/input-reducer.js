import * as actionConst from '../actions/action-const';

const initialState = {
  colorCode: {}
}

function inputReducer(state={colorCode: {}}, action) {
  switch (action.type) {
    case actionConst.findColor: {
      return {
        colorCode: action.colorCode
      }
    }
    default: {
      return state;
    }
  }
}

export default inputReducer;
import * as actionConst from '../actions/action-const';

const initialState = {
  output: {}
}

function colorReducer(state={output: {}}, action) {
  switch (action.type) {
    case actionConst.colorChange: {
      return {
        output: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default colorReducer;
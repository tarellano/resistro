import * as actionConst from '../actions/action-const';

const initialState = {
  colorCode: {
    '1': 'saddlebrown',
    '2': 'black',
    '3': 'red'
  },
  opacity: 1,
  value: '1000',
  error: null,
  tolerance: '5%',
  colorTolerance: 'gold'
}

function reducer(state=initialState, action) {
  switch (action.type) {
    case actionConst.findColor: {
      return {
        ...state,
        error: null,
        opacity: 1,
        value: action.value,
        colorCode: action.colorCode
      };
    }
    case actionConst.findColorError: {
      return {
        ...state,
        opacity: 0.5,
        value: action.value,
        error: action.error
      };
    }
    case actionConst.solveColor: {
      return {
        ...state,
        error: null,
        opacity: 1,
        value: action.value,
        colorCode: action.colorCode
      }
    }
    case actionConst.solveTolerance: {
      return {
        ...state,
        error: null,
        tolerance: action.tolerance,
        colorTolerance: action.colorTolerance
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;

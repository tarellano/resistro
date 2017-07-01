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

var holdState = initialState;

function reducer(state=initialState, action) {
  switch (action.type) {
    case actionConst.findColor: {
      var newState = holdState = {
        ...state,
        error: null,
        opacity: 1,
        value: action.value,
        colorCode: action.colorCode
      };
      return newState;
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
      var newState = {
        ...state,
        error: null,
        opacity: 1,
        value: action.value,
        colorCode: action.colorCode
      }
      if (action.eventType != 'mouseenter') {
        holdState = newState;
      }
      return newState;
    }
    case actionConst.solveTolerance: {
      var newState = {
        ...state,
        error: null,
        tolerance: action.tolerance,
        colorTolerance: action.colorTolerance
      }
      if (action.eventType != 'mouseenter') {
        holdState = newState;
      }
      return newState;
    }
    case actionConst.revertState: {
      return holdState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;

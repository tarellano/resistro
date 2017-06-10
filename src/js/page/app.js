    import { bindActionCreators } from 'redux';
    import { connect } from 'react-redux';
    import * as actionCreators from '../actions/action-creators';

    import Main from './main';

    //App.js is used to map the States and Dispatch actions as props so that we can simply call this.props.(state or action) within another componenet

    function mapStateToProps(state) {
      return {
        colorCode: state.inputReducer.colorCode,
        opacity: state.inputReducer.opacity
      }
    }

    function mapDispatchToProps(dispatch){
      return bindActionCreators(actionCreators, dispatch);
    }

    const app = connect(mapStateToProps, mapDispatchToProps)(Main);

    export default app;


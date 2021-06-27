import {connect} from 'react-redux';
import {AppState} from '../root-reducer';
import HomeView from './Home.view';

const mapStateToProps = (state: AppState) => {
    return {
        cityLocationDay: state.searchReducer.cityLocationDay,
        isLoading: state.homeReducer.isLoading,
    };
};
export default connect(
    mapStateToProps,
    null
)(HomeView)
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppState} from '../../root-reducer';
import {getCityList} from '../Home.actions';
import {getLocationDay, setIsLoading} from './Search.actions';
import SearchView from './Search.view';
import {ISearchActionProps} from './Search.types';

const mapStateToProps = (state: AppState) => {
    return {
        cityList: state.homeReducer.cityList,
    };
};
const mapDispatchToProps = (dispatch: Dispatch): ISearchActionProps => ({
    onSearch: (cityText: string): void => {
        dispatch(getCityList(cityText));
    },
    onSelectCity: (woeid: number): void => {
        dispatch(getLocationDay(woeid));
    },
    setIsLoading: (isLoading: boolean): void => {
        dispatch(setIsLoading(isLoading))
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchView)
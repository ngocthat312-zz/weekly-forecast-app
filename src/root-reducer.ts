import {combineReducers} from 'redux'
import HomeReducer from './components/Home.reducer';
import SearchReducer from './components/Home/Search.reducer';

const RootReducer = combineReducers({
    homeReducer: HomeReducer,
    searchReducer: SearchReducer,
})

export type AppState = ReturnType<typeof RootReducer>;

export default RootReducer;
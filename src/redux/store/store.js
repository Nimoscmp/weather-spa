
import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
//Ducks
import { selectLanguageReducer, selectThemeReducer } from '../reducers/';



//Combine reducer
const rootReducer = combineReducers({
    //Different reducers are consumed into store
    theme: selectThemeReducer,
    lang: selectLanguageReducer
})

//Store data in redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    //Create store constante calling combine reducers
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
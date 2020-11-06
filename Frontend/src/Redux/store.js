import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import mapReducer from './MapIntegration/reducer'
import foodReducer from './FoodList/reducer'
import singleFoodReducer from './SingleFood/reducer'

let composeEnhancers = compose;

const rootreducer = combineReducers({ reducer, mapReducer, foodReducer,singleFoodReducer});

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootreducer, enhancer);

export default store;
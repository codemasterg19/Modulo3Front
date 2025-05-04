import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';


const initialState = { count: 0};

function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'increment_async':
        return { count: state.count + 1 };
      default:
        return state;
    }
  }

  export const store = createStore(counterReducer, applyMiddleware(thunk));
import { createStore, combineReducers } from 'redux';
import rootReducers from 'state/reducer';

function configureStore(initialState = {}) {
  const appReducer = combineReducers(rootReducers);
  const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
      return appReducer(undefined, action);
    }
    return appReducer(state, action);
  };

  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}

export default configureStore;
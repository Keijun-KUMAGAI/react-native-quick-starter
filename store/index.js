import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux'
import thunk from 'redux-thunk'
import ReactoTron from './ReactoTronConfig'

const testAction = async dispatch => dispatch({ type: 'TEST_ACTION', payload: 'TEST_DATA_STRING' })

exports.actions = {
  testAction,
}

const initialState = {
  all: [],
}

const testReducers = (state = initialState, action) => {
  switch (action.type) {
  case 'TEST_ACTION':
    return { ...state, all: ['this is test action result'] }
  default:
    return { ...state }
  }
}

const reducers = combineReducers({ test: testReducers })

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), ReactoTron.createEnhancer()),
)

export default store

import {createStore} from 'redux';

import registerReducer from '../Reducers/registerReducer'

const store = createStore(registerReducer)

export default store
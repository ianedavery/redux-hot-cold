import {createStore} from 'redux';

import {hotColdReducer} from './reducer';

export default createStore(hotColdReducer);
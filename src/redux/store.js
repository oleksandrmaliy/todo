// src/redux/store.js

import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducers';

const enhancer = devToolsEnhancer();
const store = createStore(rootReducer, enhancer);

export default store;

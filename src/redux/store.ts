import {createStore,compose} from 'redux'; 
import rootReducer from './rootreducer';

const store = createStore(rootReducer, 
    compose((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) 
);

export default store; 
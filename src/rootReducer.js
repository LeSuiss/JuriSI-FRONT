import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { adminReducer } from 'react-admin';


const rootReducer = combineReducers({
    admin: adminReducer,
    router: connectRouter(history),

});

export default rootReducer;
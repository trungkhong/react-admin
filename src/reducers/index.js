import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { scoops } from './scoops.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { modal } from './modal.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    modal,
    scoops
});

export default rootReducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    sideBar: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SHOWSIDEBAR:
            return {sideBar: true}
        case actionTypes.HIDESIDEBAR:
            return {sideBar: false}
    }
    return state;
};

export default reducer;
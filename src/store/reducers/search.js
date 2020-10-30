import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
    search:false,

    videos:[],
    selectedVideo:null,

    weatherBit:{
      icon:'',
      code:'',
      description:''
    },
    weatherBitTemperature:'',
    weatherBitError:''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SHOWSEARCH:
            return {
                search:true,
                videos:action.videos,
                selectedVideo:action.selectedVideo,
            
                weatherBit:action.weatherBit,
                weatherBitTemperature:action.weatherBitTemperature,
                weatherBitError:action.weatherBitError
            }
        case actionTypes.HIDESEARCH:
            return updateObject(state,{search:false})
        case actionTypes.ONVIDEOSELECT:
            return updateObject(state,{selectedVideo:action.video})
    }
    return state;
};

export default reducer;
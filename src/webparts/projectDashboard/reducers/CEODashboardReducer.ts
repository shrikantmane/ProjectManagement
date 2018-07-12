import { CEOProjects } from "../model/CEOProjectList";
import {
    GET_CEO_PROJECT_LIST, GET_CEO_PROJECT_LIST_SUCCESS  
} from "../constants";

const INITIAL_STATE = {
    projectList:Array<CEOProjects>()
}

function CEODashboardReducer(state = INITIAL_STATE, action) {
    console.log('CEODashboardReducer', action);
    if(action){
        switch (action.type) {
            case GET_CEO_PROJECT_LIST:
                return state ;

            case GET_CEO_PROJECT_LIST_SUCCESS:
            console.log('CEODashboardReducer, getList', action.payload.projectList);
                return { ...state, projectList: action.payload.projectList };
        
            default:
                return state;
        }
    }else{
        return state;
    }
}
export default CEODashboardReducer;
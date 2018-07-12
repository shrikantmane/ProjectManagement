import {sp, ItemAddResult} from "@pnp/sp";
import { CEOProjects } from "../model/CEOProjectList";

import {
    GET_CEO_PROJECT_LIST, GET_CEO_PROJECT_LIST_SUCCESS  
} from "../constants";

export function getCEOProjectList(dispatch) {
    console.log('getCEOProjectList');

  sp.web.lists.getByTitle("Projects")
    .items
    .select("Project_x0020_ID","Project", "StartDate", "DueDate", "AssignedTo/Title", "AssignedTo/ID","Status0/ID","Status0/Status","Status0/Status_x0020_Color","Priority").expand("AssignedTo", "Status0")
    .getAll()
    .then((response) => {
      console.log(response); 
     dispatch(gotAction(response))
    }); 
    
    const action = {
        type: GET_CEO_PROJECT_LIST,       
    };
    return action;
}

export function gotAction(response) {
    return {
        type: GET_CEO_PROJECT_LIST_SUCCESS,
        payload: {
            projectList: response
        } 
    };
}
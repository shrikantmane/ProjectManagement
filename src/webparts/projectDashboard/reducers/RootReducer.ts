import { combineReducers } from "redux";
import CEODashboardReducer from "./CEODashboardReducer";
export function RootReducer(state, action) {
    const combinedReducers = combineReducers(
        {
            ceoDashbaord: CEODashboardReducer
        }
    );
    return combinedReducers(state, action);
}

import { combineReducers } from "redux";
import pageChangedReducer from "./pageChanged";
import projectsReducer from "./projects";

const allReducers = combineReducers({
  pageChanged: pageChangedReducer,
  projects: projectsReducer,
});

export default allReducers;

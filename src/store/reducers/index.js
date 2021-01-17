import pageChangedReducer from "./pageChanged";
import projectsReducer from "./projects";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  pageChanged: pageChangedReducer,
  projects: projectsReducer,
});

export default allReducers;

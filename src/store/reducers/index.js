import { combineReducers } from "redux";
import pageChangedReducer from "./pageChanged";
import profileReducer from "./profile";
import projectsReducer from "./projects";

const allReducers = combineReducers({
  pageChanged: pageChangedReducer,
  profile: profileReducer,
  projects: projectsReducer,
});

export default allReducers;

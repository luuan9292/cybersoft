import { combineReducers } from "redux";
import { coursesReducer } from './coursesReducer';
import {selectedCourseReducer} from './selectedCourseReducer'

const rootReducer = combineReducers({
    courses: coursesReducer,
    selectedCourse: selectedCourseReducer
})

export default rootReducer;
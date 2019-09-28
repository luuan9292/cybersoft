import * as Types from '../Constants';

const initialState = JSON.parse(localStorage.getItem('dataToDoList'));

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.ADD_TASK:
            let tasks = [...state, action.payload]
            return tasks;

        default: return state;
    }
}

export default tasksReducer;
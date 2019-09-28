import * as Types from '../Constants';

export const addTask = (newTask) => {
    return {
        type: Types.ADD_TASK,
        payload: newTask
    }
}
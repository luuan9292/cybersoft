const initialState = [];

export const coursesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_COURSES":
            return action.payload;
        case "ADD_COURSE":
            return [...state, action.payload];
        case "DELETE_COURSE":
            return state.filter(course => course.id !== action.payload)
        case "UPDATE_COURSE":
            const index = state.findIndex(course => course.id === action.payload.id);
            const courses = [...state];
            courses[index] = action.payload;
            return courses;
        default: return state;
    }
}

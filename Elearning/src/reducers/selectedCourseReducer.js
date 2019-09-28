const initialState = {}

export const selectedCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_SELECTED_COURSE":
            return action.payload

        default:
            return state
    }
}

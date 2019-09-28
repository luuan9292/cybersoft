export const getCourses = data => {
    return {
        type: "GET_COURSES",
        payload: data
    }
}

export const addCourse = newCourse => {
    return {
        type: "ADD_COURSE",
        payload: newCourse
    }
}

export const deleteCourse = courseId => {
    return {
        type: "DELETE_COURSE",
        payload: courseId
    }
}

export const showSelectedCourse = course => {
    return {
        type: "SHOW_SELECTED_COURSE",
        payload: course
    }
}

export const updateCourse = newCourse => {
    return {
        type: "UPDATE_COURSE",
        payload: newCourse
    }
}
import { INCREMENT, DECREMENT, FETCH_USER, FETCH_DATA, INCREMENT_IF_ODD, FETCH_USER_FULFILLED, INCREMENT_ASYNC } from '../constants/actionTypes';

export const increment = () => {
    debugger
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const incrementIfOdd = () => {
    return {
        type: INCREMENT_IF_ODD
    }
};

export const incrementAsync = () => {
    return {
        type: INCREMENT_ASYNC,
        data: {
            id: 100,
            name: 'dream'
        }
    }
}

export const beginFetchData = () => {
    return {
        type: FETCH_DATA
    }
}

export const fetchUserFulfilled = (payload) => {
    return {
        type: FETCH_USER_FULFILLED,
        payload
    }
};


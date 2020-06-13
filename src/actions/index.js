import axios from 'axios';

export const removeItemAction = (itemType, id) => ({
    type: 'REMOVE_ITEM',
    payload: {
        itemType,
        id,
    },
});

export const addItemAction = (itemType, itemContent) => {

    const getId = () =>
        `_${Math.random()
            .toString(36)
            .substr(2, 9)}`;

    return {
        type: 'ADD_ITEM',
        payload: {
            itemType,
            item: {
                id: getId(),
                ...itemContent,
            }
        },
    }
}

export const authenticate = (username, password) => {

    return function (dispatch) {
        dispatch({ type: 'AUTHENTICATE_REQUEST' });

        return axios.post('http://localhost:9000/api/user/login', {
            username: username,
            password: password,
        })
            .then(result => {
                console.log(result);
                dispatch({ type: 'AUTHENTICATE_SUCCESS', result })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: 'AUTHENTICATE_FAILURE' })
            });
    }
}

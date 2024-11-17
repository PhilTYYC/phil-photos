import { USER_LOGIN } from '../common/constants'

// eslint-disable-next-line import/no-anonymous-default-export
const usersReducer = (state = {}, action: any) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                images: action.payload[0]
            };
        default:
            return state;
    }
};

export default usersReducer;
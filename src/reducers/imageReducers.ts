import { IMAGE_LIST_LOADED } from '../common/constants'

// eslint-disable-next-line import/no-anonymous-default-export
const imagesReducer = (state = {}, action: any) => {
    switch (action.type) {
        case IMAGE_LIST_LOADED:
            return {
                ...state,
                images: action.payload[0]
            };
        default:
            return state;
    }
};

export default imagesReducer;
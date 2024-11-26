import { createSlice } from "@reduxjs/toolkit";

interface ImagesState {
    images: string[];
    currentImage: string;
}

const initialState: ImagesState = {
    images: [],
    currentImage: ''
}

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        updateList: (state, action) => {
            state.images = action.payload.images
        },
        selectImage: (state,  action) => {
            state.currentImage = action.payload.currentImages
        }
    }
});

export const {updateList, selectImage} = imagesSlice.actions;
export default imagesSlice.reducer;
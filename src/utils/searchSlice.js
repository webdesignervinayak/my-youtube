import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        searchParameterText: null,
        showVideo: false
    },
    reducers: {
        searchParameter : (state, action) => {
            state.searchParameterText = action.payload;
        },
        showSearchedVideo : (state) => {
            state.showVideo = !state.showVideo;
        }
    }
})

export const {searchParameter, showSearchedVideo} = searchSlice.actions;

export default searchSlice.reducer;
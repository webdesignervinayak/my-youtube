import { createSlice } from "@reduxjs/toolkit";
import { generate } from "./helper";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        messages : [],
    },
    reducers : {
        addMessages: (state, action) => {
            if(state.messages.length >= 10){
                state.messages.shift();
            }
            state.messages.push(action.payload);
        }
    }
})

export const {addMessages} = chatSlice.actions

export default chatSlice.reducer;

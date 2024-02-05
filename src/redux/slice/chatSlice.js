import { createSlice } from "@reduxjs/toolkit";
import { uid } from "../../firebase/realtimeDatabaseFunctions";

export const chatSlice = createSlice({
    name: 'chatInfo',
    
    initialState: {
        friendLastchatList: [],
        updateMessage: 0,
        isOpenChatBox: false
    },

    reducers: {
        setFriendLastchatList: (state, action) => {
            state.friendLastchatList = action.payload

            let newUpdateMessage = 0
            action.payload.forEach(chatEachItem => {
                if (chatEachItem.isUpdate && chatEachItem.senderId !== uid()) {
                    newUpdateMessage++
                }
            })
            state.updateMessage = newUpdateMessage
        },

        // clearUpdateMessage: (state, action) => {
        //     state.updateMessage = 0
        // }

        setOpenChatBox: (state, action) => {
            state.isOpenChatBox = action.payload
        },
    }
})

export const { setFriendLastchatList, clearUpdateMessage } = chatSlice.actions

export default chatSlice.reducer
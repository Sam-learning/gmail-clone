//結合createReducer, createAction，可定義initialState
import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  //name used in action type
  name: 'mail',
  initialState : {
    sendMessageIsOpen :false,
  },
  
  //Pure Reducer : def how state change
  //是一些function以之前的state 為input
  reducers: {
    //action1
    openSendMessage: (state) => {
      
      state.sendMessageIsOpen = true;
    },
    //action2
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    
  }

});


export const { openSendMessage, closeSendMessage } = mailSlice.actions;

//initialState 的 sendMessageIsOpen :false
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';


//One store for whole application
export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});


//如果有很多reducer，就要先combine reducer，因為store只接受一個reducer
//例如：一個mailSlice，一個userSlice..

//前面是name
// const reducer = combineReducers({
//   counter: counter.reducer,
//   user: user.reducer,
// })
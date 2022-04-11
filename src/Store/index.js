import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../server/authSlice';

export default configureStore({
reducer: {
    auth: authReducer,
    },
})
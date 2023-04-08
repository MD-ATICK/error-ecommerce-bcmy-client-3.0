import { configureStore } from '@reduxjs/toolkit';
import getuser from '../UserSlice/UserSlice.js'


const Store = configureStore({
    reducer: {
        getuser : getuser ,
    }
})

export default Store;
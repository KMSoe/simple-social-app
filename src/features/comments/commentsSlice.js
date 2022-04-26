import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosObj from '../../utils/axiosObj';


const initialState = {
    comments:[],
    status: 'idle',
    error: null
}

export const fetchComments = createAsyncThunk("posts/fetchComments", async (id) => {
    const { data } = await axiosObj.get(`/posts/${id}/comments`);
    //console.log(data)
    return data.data;
})

const commentsSlice = createSlice({
    name:"comments",
    initialState,
    reducers:{
    }
});


export const selectAllComments = state => state.comments

export default commentsSlice.reducer;
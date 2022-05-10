import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosObj from '../../utils/axiosObj';


const initialState = {
    comments:[],
    status: 'idle'
}

export const fetchComments = createAsyncThunk("posts/fetchComments", async (id) => {
    const { data } = await axiosObj.get(`/posts/${id}/comments`);
    //console.log(data)
    return data;
})

const commentsSlice = createSlice({
    name:"comments",
    initialState,
    reducers:{
    },
    extraReducers(builder) {
        builder
            .addCase(fetchComments.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                if(action.payload.success){
                    state.status = 'success';
                    state.comments = action.payload.data;
                }
                //console.log(state.comments)
               
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
});


export const selectComments = state => state.comments.comments

export default commentsSlice.reducer;
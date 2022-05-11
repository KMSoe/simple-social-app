import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosObj from '../../utils/axiosObj';

const initialState = {
    posts: [],
    status: 'idle'
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const { data } = await axiosObj.get('/posts');
    return data.data;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'success';
                state.posts = state.posts.concat(action.payload);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
});

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (allpost, id)=>{
    //console.log(allpost.posts.find(a=> a.id == id))
   return allpost.posts.find(posts=> posts.id == id)
}
 
export default postsSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosObj from '../../utils/axiosObj';

const initialState = {
    authenticated: false,
    user: {},
    token: localStorage.getItem('token'),
    signInErrors: [],
    signUpErrors: [],
}

export const signin = createAsyncThunk("auth/signin", async ({ email, password }) => {
    return axiosObj.post('/login', JSON.stringify({ email, password }))
        .then(({ data }) => {
            axiosObj.defaults.headers.common['Authorization'] = `Bearer ${data.meta.token}`
            return data;
        })
        .catch(({ response }) => {
            return response.data;
        })
});

export const signout = createAsyncThunk("auth/signout", async () => {
    return axiosObj.post('/logout', JSON.stringify({}))
        .then((res) => {
            return 'Successfuly logout';
        })
        .catch(({ response }) => {
            return response;
        })
});

export const autoSignin = createAsyncThunk("auth/autoSignin", async () => {
    return axiosObj.get('/user', {
        headers: {
            'Authorization': `Bearer ${authSlice.getInitialState().token}`
        }
    })
        .then(({ data }) => {
            return data;
        })
        .catch(({ response }) => {
            return response.data;
        })
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearErrors(state, action) {
            state.signInErrors = [];
            state.signUpErrors = [];
        }
    },
    extraReducers(builder) {
        builder
            .addCase(signin.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.user = action.payload.data;
                    state.token = action.payload.meta.token;
                    state.authenticated = true;

                    localStorage.setItem('token', action.payload.meta.token);
                } else {
                    state.signInErrors = [...state.signInErrors, action.payload.message];
                }

            })
            .addCase(signout.rejected, (state, action) => {
                // console.log('fail');
            })
            .addCase(signout.fulfilled, (state, action) => {
                state.user = null;
                state.token = null;
                state.authenticated = false;

                localStorage.setItem('token', null);
            })
            .addCase(autoSignin.rejected, (state, action) => {
                // console.log(action.payload);
            })
            .addCase(autoSignin.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.user = action.payload.data;
                    state.authenticated = true;
                };
            })
    }
});

export const selectAuthenticated = (state) => state.auth.authenticated;
export const selectUser = (state) => state.auth.user;
export const selectUserId = (state) => state.auth.user ? state.auth.user.id : null;
export const { clearErrors } = authSlice.actions;

export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const { id, field, value } = action.payload;
            const user = state.find((user) => user.id === id);
            if (user) {
                user[field] = value;
            }
        },
        deleteUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload);
        },
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

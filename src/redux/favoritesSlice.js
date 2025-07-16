import { createSlice } from '@reduxjs/toolkit';

const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: savedFavorites,
    reducers: {
        toggleFavorite(state, action) {
            const index = state.findIndex(p => p.id === action.payload.id);
            if (index >= 0) {
                state.splice(index, 1);
            } else {
                state.push(action.payload);
            }
            localStorage.setItem('favorites', JSON.stringify(state));
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
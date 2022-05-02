import { configureStore } from '@reduxjs/toolkit'
import { repoReducer } from './githubSlice/githubSlice'

export const store = configureStore({
    reducer: {
        repo: repoReducer
    }
})
import { createSlice } from "@reduxjs/toolkit";
import {sub} from "date-fns"

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
        }
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
        }
    }
]

const postsSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        addPost(state,{payload}){
            state.push(payload)
        },
        addReaction(state,{payload}){
            const {postId,reaction}=payload;
            const existingPost=state.find((post)=>post.id==postId);
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
     }
})


export const {addPost,addReaction}=postsSlice.actions

export default postsSlice.reducer










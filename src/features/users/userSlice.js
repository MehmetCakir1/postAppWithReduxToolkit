import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{id:"0",name:"Luka Doncic"},
{id:"1",name:"Nikola Jokic"},
{id:"2",name:"Lauri Markkanen"}
]

const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{}
})


export default userSlice.reducer










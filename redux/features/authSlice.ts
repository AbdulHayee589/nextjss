import {createSlice,PayloadAction} from "@reduxjs/toolkit"

type InitialState={
    value:AuthState;
}

type AuthState={
    isAuth: boolean;
    user:Object,
}


const initialState = {
    value:{
        isAuth:false,
        user:{},
    } as AuthState,
} as InitialState

export const auth=createSlice({
    name:"auth",
    initialState,
    reducers:{
        
        logout:()=>{
            return initialState;
        },
        login:(state,action:PayloadAction<AuthState>)=>{
            return {
                value:{
                    isAuth:true,
                    user:action.payload,
                }
            }
        },
    }
    
})


export const {logout,login}=auth.actions
export default auth.reducer
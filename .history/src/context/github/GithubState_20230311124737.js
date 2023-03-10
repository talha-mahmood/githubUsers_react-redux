import React,{useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext  '
import GIthubReducer from './githubReducer'

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
}  from '../types'

const GithubState=props=>{
    const initialStae={
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state,dispatch]=useReducer()
}
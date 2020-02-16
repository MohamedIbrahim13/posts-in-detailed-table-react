import React, { createContext, useState } from 'react';
import axios from 'axios';

export const PostContext=createContext();


const PostContextProvider = (props) => {
    const [posts,setPosts]=useState({});
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
        setPosts(res.data);
    }).catch(err=>{console.log(err)});
    return (
        <PostContext.Provider value={{posts}}>{props.children}</PostContext.Provider>
    )
}

export default PostContextProvider

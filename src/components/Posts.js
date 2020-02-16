import React, { useContext,useState } from 'react';
import { PostContext } from '../contexts/PostContext';
import PostTable from './PostTable';
import axios from 'axios';
import CommentsOfPost from './CommentsOfPost';


const Posts = () => {
    const {posts}=useContext(PostContext);
    const [userposts,setUserPosts]=useState([]);
    const [comments,setComments]=useState([]);
    return posts.length ? (
        <div>
          <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">userId</th>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                </tr>
            </thead>
            {posts.map(post=>{
                const handleUserPosts=(e)=>{
                    e.preventDefault();
                    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${post.userId}`).then(res=>{
                        setUserPosts(res.data);
                    }).catch(err=>{console.log(err)});     
                }
                const handleComments=(e)=>{
                    e.preventDefault();
                    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`).then(res=>{
                        setComments(res.data);
                    }).catch(err=>{console.log(err)}); 
                }
                return (
                    <tbody>
                        <tr>
                            <th scope="row" onClick={handleUserPosts}>{post.userId}</th>
                            <td onClick={handleComments}>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    </tbody>
                )
            })}
          </table>
          <PostTable userposts={userposts} />
          <CommentsOfPost comments={comments} />
          
        </div>
    ) : (<p className="lead">Sorry ,No posts at all</p>)
    
}

export default Posts

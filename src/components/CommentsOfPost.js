import React from 'react'
import CommentDetails from './CommentDetails'

const CommentsOfPost = ({comments}) => {
    return comments.length ? (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">body</th>
                </tr>
            </thead>
            {comments.map(comment=><CommentDetails  key={comment.id} comment={comment}/> )}
        </table>
        
    ) : (<p className="lead">No posts related to that user yet</p>)
}

export default CommentsOfPost

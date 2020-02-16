import React from 'react'

const CommentDetails = ({comment}) => {
    return (
        <tbody>
            <tr>
                <th scope="row">{comment.name}</th>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
            </tr>
        </tbody>
        
    )
}

export default CommentDetails

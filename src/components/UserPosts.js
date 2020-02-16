import React from 'react'

const UserPosts = ({userpost}) => {
    return (
        <tbody>
            <tr>
                <th scope="row">{userpost.title}</th>
                <td>{userpost.body}</td>
            </tr>
        </tbody>
        
    )
}

export default UserPosts

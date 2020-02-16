import React from 'react';
import UserPosts from './UserPosts';

const PostTable = ({userposts}) => {
    return userposts.length ? (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                </tr>
            </thead>
            {userposts.map(userpost=><UserPosts  key={userpost.id} userpost={userpost}/> )}
        </table>
        
    ) : (<p className="lead">No posts related to that user yet</p>)
    
}

export default PostTable

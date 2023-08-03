import React from 'react';
import { Link } from 'react-router-dom';

const TasklistRow = ({alltask, index, handleDelete }) => {
    const { _id, title, email, likes, status, bio} = alltask;
    console.log(alltask);
    return (
        <tr>
           <td>{index}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>{bio}</td>
            <td>{likes}</td>
            <td>{status}</td>
            <th>
                <Link to={`/task/${_id}`}><button className="btn btn-primary btn-xs">Update</button></Link>
            </th>
            <th>
                <button className='btn btn-primary btn-xs' onClick={() => handleDelete(_id)}>Delete</button>
            </th>
        </tr>
    );
};

export default TasklistRow;
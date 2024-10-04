import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../redux/userSlice';

const UserList = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    const handleUpdate = (id, field, value) => {
        dispatch(updateUser({ id, field, value }));
    };

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                        <button onClick={() => handleUpdate(user.id, 'name', prompt('Update Name', user.name))}>Update Name</button>
                        <button onClick={() => handleUpdate(user.id, 'email', prompt('Update Email', user.email))}>Update Email</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';

const UserForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ id: Date.now(), name, email }));
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;

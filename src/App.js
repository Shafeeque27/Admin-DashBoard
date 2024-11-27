import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserTable from './components/UserTable';

const App = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Shafeeq',
            email: 'shafeeq@gmail.com',
            role: 'Admin',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Jane',
            email: 'jane@gmail.com',
            role: 'Editor',
            status: 'Inactive',
        },
        {
            id: 3,
            name: 'Vishnu',
            email: 'vishnu@gmail.com',
            role: 'Viewer',
            status: 'Active',
        },
        {
            id: 4,
            name: 'Hidash',
            email: 'hidash@gmail.com',
            role: 'Viewer',
            status: 'Active',
        },
        {
            id: 5,
            name: 'Safvan',
            email: 'safvan@gmail.com',
            role: 'Viewer',
            status: 'Active',
        },
    ]);

    const addUser = (user) =>
        setUsers([...users, { ...user, id: users.length + 1 }]);

    const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

    const updateUser = (id, updatedUser) => {
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto p-4">
                <UserTable
                    users={users}
                    addUser={addUser}
                    deleteUser={deleteUser}
                    updateUser={updateUser}
                />
            </div>
        </div>
    );
};

export default App;

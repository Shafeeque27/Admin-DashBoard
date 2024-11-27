import React, { useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Modal from './Modal';

const UserTable = ({ users, addUser, deleteUser, updateUser }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white rounded shadow-md p-4 overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">User Management</h2>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => {
                        setSelectedUser(null);
                        setIsModalOpen(true);
                    }}>
                    Add User
                </button>
            </div>
            <table className="min-w-full border-collapse border border-gray-300 ">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                            Name
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                            Email
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                            Role
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center">
                            Status
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">
                                {user.name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {user.email}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {user.role}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {user.status}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                <button
                                    className="text-blue-600 hover:text-blue-800 mr-2"
                                    onClick={() => handleEdit(user)}>
                                    <FiEdit />
                                </button>
                                <button
                                    className="text-red-600 hover:text-red-800"
                                    onClick={() => deleteUser(user.id)}>
                                    <FiTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <Modal
                    user={selectedUser}
                    onClose={() => setIsModalOpen(false)}
                    onSave={(user) => {
                        selectedUser
                            ? updateUser(selectedUser.id, user)
                            : addUser(user);
                        setIsModalOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default UserTable;

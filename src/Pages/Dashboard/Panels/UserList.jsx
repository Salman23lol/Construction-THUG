import React, { useState, useEffect } from "react";

const UserList = () => {
  // State to hold user data
  const [users, setUsers] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    // This would be replaced with an actual API call
    const fetchData = async () => {
      // Example user data
      const response = [
        {
          id: 1,
          email: "john.doe@example.com",
          username: "john_doe",
          created_at: "2023-01-15T10:30:00Z", // Join date
        },
        {
          id: 2,
          email: "jane.smith@example.com",
          username: "jane_smith",
          created_at: "2023-02-20T14:45:00Z", // Join date
        },
        {
          id: 3,
          email: "peter.parker@example.com",
          username: "spiderman",
          created_at: "2023-03-10T08:20:00Z", // Join date
        },
        
      ];

      setUsers(response);
    };

    fetchData();
  }, []);

  // Format date to make it readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full  h-full">
      <h1 className="text-2xl font-bold text-center mb-6">Registered Users</h1>

        <div className="sm:px-4">
        <table className="table-auto w-full bg-orange-100">
          <thead>
            <tr className="bg-orange-600  bg-opacity-70 text-white text-left">
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Join Date</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-4 text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-b border-orange-300">
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{formatDate(user.created_at)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default UserList;

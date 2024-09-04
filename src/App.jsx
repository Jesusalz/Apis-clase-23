import React, { useEffect, useState } from "react";
import "./index.css";
import Pokemon from './Pokemon';
import Weather from './Weather';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setUsers(json.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold mb-4">Usuarios</h1>
      <div className="flex justify-center flex-wrap">
        {users.length &&
          users.map((user) => (
            <div key={user.id} className="m-4 p-4 bg-gray-200 rounded-lg shadow-lg">
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
              <img src={user.avatar} alt={`${user.first_name} avatar`} className="rounded-full" />
            </div>
          ))}
      </div>

      
      <Weather />
      <Pokemon />
    </div>
  );
}

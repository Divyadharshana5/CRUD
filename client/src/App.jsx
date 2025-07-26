import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filterusers, setFilterusers] = useState([]);

  const getAllUsers = async () => {
    await axios.get("http://localhost:3030/users").then((res) => {
      setUsers(res.data);
      setFilterusers(res.data);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  //Search Function

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText) ||
        user.city.toLowerCase().includes(searchText)
    );
    setFilterusers(filteredUsers);
  };
  return (
    <div className="container">
      <h3>CRUD Application with React.js Frontend and Node.js Backend</h3>
      <div className="input-search">
        <input
          type="search"
          placeholder="Search Text Here..."
          onChange={handleSearchChange}
        />
        <button className="add-btn green">Add Record</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filterusers &&
            filterusers.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td>
                    <button className="btn green">Edit</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="btn red"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

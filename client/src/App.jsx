import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    await axios.get("http://localhost:3030/users").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="container">
      <h3>CRUD Application with React.js Frontend and Node.js Backend</h3>
      <div className="input-search">
        <input type="search" placeholder="Search..." />
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
          <tr>
            <td>1</td>
            <td>Ramya</td>
            <td>21</td>
            <td>Perambur</td>
            <td>
              <button className="btn green">Edit</button>
            </td>
            <td>
              <button className="btn red">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

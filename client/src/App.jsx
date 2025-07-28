import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filterusers, setFilterusers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    city: "",
  });

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

  //Delete Function
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!isConfirmed) {
      await axios.delete(`http://localhost:3030/users/${id}`).then((res) => {
        setUsers(res.data);
        setFilterusers(res.data);
      });
    }
  };

  //Close Modal

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //And User Details
  const handleAddRecord = () => {
    setUserData({
      name: "",
      age: "",
      city: "",
    });
    setIsModalOpen(true);
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
        <button className="add-btn green" onClick={handleAddRecord}>
          Add Record
        </button>
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
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>User Record</h2>
            <div className="input-group"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

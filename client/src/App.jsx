import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h3>CRUD Application with React.js Frontend and Node.js Backend </h3>
        <div className="input-search">
          <input type="search" />
          <button>Add Record</button>
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
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

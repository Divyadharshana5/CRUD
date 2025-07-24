import "./App.css";

function App() {
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

          <tr>
            <td>2</td>
            <td>Shalini</td>
            <td>20</td>
            <td>Chennai</td>
            <td>
              <button className="btn green">Edit</button>
            </td>
            <td>
              <button className="btn red">Delete</button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Vijay</td>
            <td>49</td>
            <td>Bangalore</td>
            <td>
              <button className="btn green">Edit</button>
            </td>
            <td>
              <button className="btn red">Delete</button>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Chinnu</td>
            <td>18</td>
            <td>Chennai</td>
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

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h3>CRUD Application with React.js Frontend and Node.js Backend </h3>
        <div className="input-search">
          <input type="search" />
          <button>Add Record</button>
          <table className="table"></table>
        </div>
      </div>
    </>
  );
}

export default App;

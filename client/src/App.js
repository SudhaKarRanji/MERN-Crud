import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

//navabar,view,add,delete,update
import Navbar from "./components/navbar.component";
import view from "./components/view.component";
// import add from "./components/create.component";
// import deleteuser from "./components/delete.component";
// import update from "./components/edit.component"; 

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
       <Route path="/" exact component={view} />
      {/* <Route path="/add" component={add} />
      <Route path="/delete" component={deleteuser} />
      <Route path="/update" component={update} />  */}
      </div>
    </Router>
  );
}

export default App;




import './App.css';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';

function App() {
  return (
    <div>
      <Router>
    <div className="container">
      <Switch>
        <Route path ="/" exact component ={ListStudentComponent}></Route>
        <Route path ="/students" component ={ListStudentComponent}></Route>
        <Route path ="/add-student" component ={CreateStudentComponent}></Route>
     <ListStudentComponent/>
     </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;

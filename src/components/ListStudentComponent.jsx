import React, { Component } from 'react'
import StudentService from '../services/StudentService';


 class ListStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state={
          students:[]
        }
        this.addStudent=this.addStudent.bind(this);
    }
    componentDidMount(){
        StudentService.getStudents().then((res)=>{
this.setState({students: res.data});
        });
    }
    addStudent(){
        this.props.history.push('/add-student');
    }
  render() {
    return (
      <div>
        <h2 className="text-center">Student List</h2>
        
        
        
        <div className="row">

        
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date Of Birth</th>
                        <th>Class</th>
                        <th>Division</th>
                        <th>Gender</th>
                        
                    </tr>
                </thead>
                <tbody>
                     {
                        this.state.students.map(
                            student=>
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.dateOfBirth}</td>
                                <td>{student.classes}</td>
                                <td>{student.division}</td>
                                <td>{student.gender}</td>
                            </tr>
                        )
                     }
                </tbody>
            </table>
        </div>
       <center> <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button> </center>
      </div>
    )
  }
}
export default ListStudentComponent
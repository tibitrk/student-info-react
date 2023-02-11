import React, { Component } from 'react';
import StudentService from '../services/StudentService';


class CreateStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state={
           name:'',
           dateOfBirth:'',
           classes:'',
           division:'',
           gender:''

        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeDateOfBirthHandler=this.changeDateOfBirthHandler.bind(this);
        this.changeClassHandler=this.changeClassHandler.bind(this);
        this.changeDivisionHandler=this.changeDivisionHandler.bind(this);
        this.changeGenderHandler=this.changeGenderHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }
    saveStudent=(e)=>{
        e.preventDefault();
        let student ={name: this.state.name, dateOfBirth: this.state.dateOfBirth, classes: this.state.classes, division: this.state.division, gender: this.state.gender};
        console.log('student => '+ JSON.stringify(student));
        
        StudentService.createStudent(student).then(res =>{
            this.props.history.push('/students');
        });
    }
    changeNameHandler=(event)=>{
        this.setState({name:event.target.value});
    }
    changeDateOfBirthHandler=(event)=>{
        this.setState({dateOfBirth:event.target.value});
    }
    changeClassHandler=(event)=>{
        this.setState({classes:event.target.value});
    }
    changeDivisionHandler=(event)=>{
        this.setState({division:event.target.value});
    }
    changeGenderHandler=(event)=>{
        this.setState({gender:event.target.value});
    }
    cancel(){
        this.props.history.push('/students');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Student</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input placeholder="Enter Your Name" name="Name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Date Of Birth</label>
                                        <input placeholder="Enter Your Date Of Birth" name="name" className="form-control"
                                        value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}/>
                                    </div>
                                    <div className='field'>
                                      <label>Class</label>
                                          <select  name="name" className="form-control"  onChange={this.changeClassHandler}>
                                              <option></option>
                                              <option>I</option>         
                                              <option>II</option>
                                              <option>III</option>
                                              <option>IV</option>
                                              <option>V</option>
                                              <option>VI</option>
                                              <option>VII</option>
                                              <option>VIII</option>
                                              <option>IX</option>
                                              <option>X</option>
                                              <option>XI</option>
                                              <option>XII</option>
                                                             

                                          </select>
                                                          
                                      </div>
                                      <div className='field'>
                                                <label>Division</label>
                                                      <select  name="name" className="form-control" onChange={this.changeDivisionHandler}>
                                                        <option></option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                      </select>
                                                          
                                    </div>
                                    <div className="field">
                                           <label>Gender</label>  
                                             <input type="radio" className=" "  value="Male"onChange={this.changeGenderHandler} name="name"/>Male
                                            <input type="radio" className=" "   Value="Female"onChange={this.changeGenderHandler} name="name"/>Female
                                    </div>
                                    
                                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                        
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateStudentComponent
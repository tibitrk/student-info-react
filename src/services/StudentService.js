import axios from 'axios';
const STUDENT_API_BASE_URL ="http://localhost:8080/api/v1/students";


class StudentService{

    getStudents(){
      return axios.get(STUDENT_API_BASE_URL);
    }

    createStudent(student){
      return axios.post(STUDENT_API_BASE_URL, student);
    }

}
export default new StudentService();
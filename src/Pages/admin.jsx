import axios from 'axios';
import {useEffect, useState } from "react";

function Admin()
{

 //Logic

  const [studentid, setId] = useState('');
  const [studentname, setName] = useState("");
  const [studentaddress, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setUsers] = useState([]);



useEffect(() => {
  (async () => await Load())();
  }, []);


  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8080/api/v1/student/getall");
         setUsers(result.data);
         console.log(result.data);
  }
 
     /*async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/api/v1/student/save",
        {
        studentname: studentname,
        studentaddress: studentaddress,
          mobile: mobile
        });
          alert("Patient Registation Successfully");
          setId("");
          setName("");
          setAddress("");
          setMobile("");
          Load();
        }
    catch(err)
        {
          alert("Patient Registation Failed");
        }
   }*/

   async function editStudent(students)
   {
    setName(students.studentname);
    setAddress(students.studentaddress);
    setMobile(students.mobile); 
    setId(students._id);
   }

   async function DeleteStudent(studentid)
   {
        await axios.delete("http://localhost:8080/api/v1/student/delete/" + studentid); 
        alert("Patient Deleted Successfully");
        Load();
   }

   async function update(event)
   {
    event.preventDefault();

   try
       {
        await axios.put("http://localhost:8080/api/v1/student/edit/" + studentid,
       {
        
        studentname: studentname,
        studentaddress: studentaddress,
         mobile: mobile
       
       });
         alert("Patient Updated Successfully");
         setId("");
         setName("");
         setAddress("");
         setMobile("");
         Load();
       }
   catch(err)
       {
         alert("Patient Updated Failed");
       }
  }


  //Design 


  return (
    <div>
        <div class="container mt-4" >
       <h4>Admin Dashbord</h4>
          <br/>
          <h3 class="text-center">All Patient Details</h3>
          <br/>
<table class="table table-primary border shadow " align="center">
  <thead>
    <tr>
      <th scope="col">Patient Name</th>
      <th scope="col">Patient Address</th>
      <th scope="col">Patient Mobile</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {students.map(function fn(student)
       {
            return(
            <tbody>
                <tr>
                <td>{student.studentname}</td>
                <td>{student.studentaddress}</td>
                <td>{student.mobile}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editStudent(student)} >Edit</button>  
                    <button type="button" class="btn btn-danger mx-3" onClick={() => DeleteStudent(student._id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
            </div>
            <br/>

    
            <div class="container mt-4 mb-5" >
            <h4 class="text-center">Update Patient Details</h4>
            <div class="row justify-content-center ">
          <div class="col-lg-6 ">    
          <form>
              <div class="form-group">
                <label>Patient Name</label>
                <input  type="text" class="form-control" id="studentname"
                value={studentname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Patient Address</label>
                <input  type="text" class="form-control" id="studentaddress" 
                 value={studentaddress}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Patient Mobile No</label>
                <input type="text" class="form-control" id="mobile" 
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />
              </div>


              <div>
              
              <button   class="btn btn-warning mt-4 mx-3"  onClick={update}>Update</button>
              </div>   
            </form>
            </div>
            </div>

          </div>
       </div>
            );
        }
  export default Admin;

import axios from 'axios';
import {useEffect, useState } from "react";

function Student()
{

 //Logic

  const [studentid, setId] = useState('');
  const [studentname, setName] = useState("");
  const [studentaddress, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [searchId, setSearchId] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [students, setUsers] = useState([]);
  const [validationError, setValidationError] = useState('');



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

  async function save(event) {
    event.preventDefault();
    try {
      if (!studentname || !studentaddress || !mobile) {
        setValidationError('Please fill out all required fields');
        return;
      }

      await axios.post("http://localhost:8080/api/v1/student/save", {
        studentname: studentname,
        studentaddress: studentaddress,
        mobile: mobile
      });

      alert("Patient Registration Successfully");
      setId("");
      setName("");
      setAddress("");
      setMobile("");
      setValidationError('');
      Load();
    } catch (err) {
      alert("Patient Registration Failed");
    }
  }
 
  //    async function save(event)
  //   {
  //       event.preventDefault();
  //   try
  //       {
  //        await axios.post("http://localhost:8080/api/v1/student/save",
  //       {
  //       studentname: studentname,
  //       studentaddress: studentaddress,
  //         mobile: mobile
  //       });
  //         alert("Patient Registation Successfully");
  //         setId("");
  //         setName("");
  //         setAddress("");
  //         setMobile("");
  //         Load();
  //       }
  //   catch(err)
  //       {
  //         alert("Patient Registation Failed");
  //       }
  //  }

   async function searchById() {
    try {
      const result = await axios.get(
        `http://localhost:8080/api/v1/student/search/${searchId}`
      );
      setSearchResults([result.data]);
    } catch (err) {
      alert('Student not found');
    }
  }

   

   /*async function editStudent(students)
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
   }*/

   /*async function update(event)
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
  }*/


  //Design 


  return (
    <div>
       
       <div class="container mt-4" >
       <h1 class="text-center">Patients Registrations</h1>
        <div class="row justify-content-center pt-3">
          <div class="col-lg-6">
          <form>
              <div class="form-group">
                <label>Patient Name</label>
                <input  type="text" class="form-control" id="studentname" required 
                value={studentname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Patient Address</label>
                <input  type="text" class="form-control" id="studentaddress" required
                 value={studentaddress}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Patient Mobile No</label>
                <input type="text" class="form-control" id="mobile" required
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />
              </div>


              <div>
              <button   class="btn btn-primary mt-4" id="submit" onClick={save}>Register</button>
              </div>   
            </form>
            {validationError && (
        <div class="alert alert-danger mt-2" role="alert">
          {validationError}
        </div>
      )}
            </div>
            </div>
          </div>

          <br/>
          
{/* <table class="table table-dark" align="center">
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
            </table> */}

<div class="container pb-2">
<div class="form-group">
  <label>Search by Student ID</label>
  <input
    type="text"
    class="form-control"
    id="searchId"
    value={searchId}
    onChange={(event) => setSearchId(event.target.value)}
  />
</div>
<button class="btn btn-primary mt-2" onClick={searchById}>
  Search
</button>
</div>


<div class=" container mt-4 mb-5 pb-5">
  <h2 class="text-center">Search Results</h2>
  <table class="table table-primary border ">
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Address</th>
        <th>Mobile</th>
      </tr>
    </thead>
    <tbody>
      {searchResults.map((student) => (
        <tr key={student.id}>
          
          <td>{student.studentname}</td>
          <td>{student.studentaddress}</td>
          <td>{student.mobile}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            
       </div>
            );
        }
  export default Student;
import React from 'react';
import Student from  './compontents/student';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './Pages/admin';
import FileUploadDownload from './Pages/File';
import FileManagement from './Pages/AllFiles';
import Form from './Pages/Form';





function App() {
  return (
    <div className='App'>
      <Router>

        <Routes>
          <Route exact path="/" element={<Student/>}/>
        </Routes>

        <Routes>
          <Route  path="/admin" element={<Admin/>}/>
        </Routes>

        <Routes>
          <Route  path="/file" element={<FileUploadDownload/>}/>
        </Routes>

        <Routes>
          <Route  path="/allfiles" element={<FileManagement/>}/>
        </Routes>

        <Routes>
          <Route  path="/form" element={<Form/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;

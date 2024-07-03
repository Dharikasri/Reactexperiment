// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyForm from './components/MyForm'; 
import Button from './components/Button'; 
import Paragraph from './components/Paragraph';
import Dropdown from'./components/Dropdown';
import RadioButton from'./components/Radiobutton';
import Checkbox from'./components/Checkbox';
import ApiCallForm from './components/Textarea';
import Range from './components/Range';
import Namedetails from './components/Namedetails';
import Table from './components/Table';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/form" element={<MyForm />} />
          <Route path="/buttons" element={<Button />} />
          <Route path="/paragraphs" element={<Paragraph />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/radiobutton" element={<RadioButton/>} />
          <Route path="/checkbox" element={<Checkbox/>} />
          <Route path="/ApiCallForm" element={<ApiCallForm/>} />
          <Route path="/Range" element={<Range/>} />
          <Route path="/Namedetails" element={<Namedetails/>} />
          <Route path="/Table" element={<Table/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

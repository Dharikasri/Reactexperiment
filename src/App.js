import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyForm from './components/MyForm'; 
import Button from './components/Button'; 
import Paragraph from './components/Paragraph';
import Dropdown from './components/Dropdown';
import RadioButton from './components/Radiobutton';
import Checkbox from './components/Checkbox';
import ApiCallForm from './components/Textarea';
import Range from './components/Range';
import Namedetails from './components/Namedetails';
import Table from './components/Table';
import { Square, Circle, Rectangle, Triangle, TriangleRight, TriangleSkewed, Trapezoid } from './components/shapes';
import Shapes from './components/Shapes1';
import Button1 from './components/Buttons';
import Shapes2 from './components/Shapes2';
import Login from './components/Webdashboard';
import Layout from './components/Layout';
import Card from './components/Card'; // Import the Card component

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/form" element={<MyForm />} />
          <Route path="/buttons" element={<Button />} />
          <Route path="/paragraphs" element={<Paragraph />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/radiobutton" element={<RadioButton />} />
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/ApiCallForm" element={<ApiCallForm />} />
          <Route path="/Range" element={<Range />} />
          <Route path="/Namedetails" element={<Namedetails />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/shapes" element={
            <React.Fragment>
              <Square />
              <Circle />
              <Rectangle />
              <Triangle />
              <TriangleRight />
              <TriangleSkewed />
              <Trapezoid />
            </React.Fragment>
          } />
          <Route path="/shapes1" element={<Shapes />} />
          <Route path="/button1" element={<Button1 />} />
          <Route path="/shapes2" element={<Shapes2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/card" element={<Card />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;

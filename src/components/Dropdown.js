import React, { useState } from 'react';

const DropdownSelect = () => {
  const [selectedOption, setSelectedOption] = useState(''); // State to manage selected option

  // Dummy data for dropdown options
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  // Handle change in dropdown selection
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h3>Choose a Name:</h3>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value=""></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const GenderSelect = () => {
  const [selectedGender, setSelectedGender] = useState(''); // State to manage selected gender

  // Handle change in gender selection
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div>
      <h3>Choose a Gender:</h3>
      <select value={selectedGender} onChange={handleGenderChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <DropdownSelect />
      <GenderSelect />
    </div>
  );
};

export default App;

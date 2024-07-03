// MyForm.js

import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    weight: '',
    height: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="text"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mobile:
        <input
          type="text"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Weight:
        <input
          type="text"
          name="weight"
          placeholder="Enter your weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Height:
        <input
          type="text"
          name="height"
          placeholder="Enter your height"
          value={formData.height}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default MyForm;

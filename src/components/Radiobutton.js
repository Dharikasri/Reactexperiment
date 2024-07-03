import React, { useState } from 'react';

const RadioButton = () => {
  const [daysOfWeek, setDaysOfWeek] = useState('');
  const [daysInYear, setDaysInYear] = useState('');
  const [gender, setGender] = useState('');

  const handleDaysOfWeekChange = (event) => {
    setDaysOfWeek(event.target.value);
  };

  const handleDaysInYearChange = (event) => {
    setDaysInYear(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <h4>Days in a Week:</h4>
      <div>
        <label>
          <input
            type="radio"
            value="30"
            checked={daysOfWeek === '30'}
            onChange={handleDaysOfWeekChange}
          />
          30
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="10"
            checked={daysOfWeek === '10'}
            onChange={handleDaysOfWeekChange}
          />
          10
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="7"
            checked={daysOfWeek === '7'}
            onChange={handleDaysOfWeekChange}
          />
          7
        </label>
      </div>

      <h4>Days in a Year:</h4>
      <label>
        339
        <input
          type="radio"
          value="339"
          checked={daysInYear === '339'}
          onChange={handleDaysInYearChange}
        />
      </label>
      <label>
        365
        <input
          type="radio"
          value="365"
          checked={daysInYear === '365'}
          onChange={handleDaysInYearChange}
        />
      </label>
      <label>
        234
        <input
          type="radio"
          value="234"
          checked={daysInYear === '234'}
          onChange={handleDaysInYearChange}
        />
      </label>

      <h4>Gender:</h4>
      <label>
        Male
        <input
          type="radio"
          value="Male"
          checked={gender === 'Male'}
          onChange={handleGenderChange}
        />
      </label>
      <label>
        Female
        <input
          type="radio"
          value="Female"
          checked={gender === 'Female'}
          onChange={handleGenderChange}
        />
      </label>
      <label>
        Others
        <input
          type="radio"
          value="Others"
          checked={gender === 'Others'}
          onChange={handleGenderChange}
        />
      </label>
    </div>
  );
};

export default RadioButton;

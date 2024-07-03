import React, { useState } from 'react';

const Namedetails = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [languages, setLanguages] = useState({
    english: false,
    tamil: false,
    others: false
  });
  const [idProofs, setIdProofs] = useState({
    aadhar: true,
    pancard: false,
    rationcard: false,
    drivingLicense: false
  });
  const [permissions, setPermissions] = useState({
    read: true,
    write: false,
    nextLine: false,
    edit: false,
    delete: false
  });

  const handleLanguageChange = (language) => {
    setLanguages(prevState => ({
      ...prevState,
      [language]: !prevState[language]
    }));
  };

  const handleIdProofChange = (idProof) => {
    setIdProofs(prevState => ({
      ...prevState,
      [idProof]: !prevState[idProof]
    }));
  };

  const handlePermissionChange = (permission) => {
    setPermissions(prevState => ({
      ...prevState,
      [permission]: !prevState[permission]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      age,
      gender,
      mobile,
      height,
      weight,
      languages,
      idProofs,
      permissions
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Name Details Form</h2>
      <div style={{ marginBottom: '15px' }}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Gender:</label>
        <br />
        <label>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
          Male
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
          Female
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input type="radio" name="gender" value="others" checked={gender === 'others'} onChange={(e) => setGender(e.target.value)} />
          Others
        </label>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Mobile:</label>
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Height:</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Weight:</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Which language do you know?</label>
        <div>
          <label>
            <input type="checkbox" checked={languages.english} onChange={() => handleLanguageChange('english')} />
            English
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" checked={languages.tamil} onChange={() => handleLanguageChange('tamil')} />
            Tamil
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" checked={languages.others} onChange={() => handleLanguageChange('others')} />
            Others
          </label>
        </div>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Which IDProof do you have?</label>
        <div>
          <label>
            <input type="checkbox" checked={idProofs.aadhar} onChange={() => handleIdProofChange('aadhar')} />
            Aadhar
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" checked={idProofs.pancard} onChange={() => handleIdProofChange('pancard')} />
            PAN Card
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" checked={idProofs.rationcard} onChange={() => handleIdProofChange('rationcard')} />
            Ration Card
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" checked={idProofs.drivingLicense} onChange={() => handleIdProofChange('drivingLicense')} />
            Driving License
          </label>
        </div>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Permissions:</label>
        <div>
          <label>
            <input type="checkbox" checked={permissions.read} onChange={() => handlePermissionChange('read')} />
            Read
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" checked={permissions.write} onChange={() => handlePermissionChange('write')} />
            Write
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" checked={permissions.edit} onChange={() => handlePermissionChange('edit')} />
            Edit
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="checkbox" checked={permissions.delete} onChange={() => handlePermissionChange('delete')} />
            Delete
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Namedetails;

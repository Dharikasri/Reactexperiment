import React, { useState } from 'react';

const CheckBoxExample = () => {
  const [languagesKnown, setLanguagesKnown] = useState({
    english: false,
    tamil: false,
    others: false
  });

  const [permissions, setPermissions] = useState({
    read: true,
    write: false,
    edit: false,
    delete: false
  });

  const [idProof, setIdProof] = useState({
    aadhar: true,
    panCard: false,
    rationCard: false,
    drivingLicense: false
  });

  const handleLanguageChange = (language) => {
    setLanguagesKnown({ ...languagesKnown, [language]: !languagesKnown[language] });
  };

  const handlePermissionChange = (permission) => {
    setPermissions({ ...permissions, [permission]: !permissions[permission] });
  };

  const handleIdProofChange = (proof) => {
    setIdProof({ ...idProof, [proof]: !idProof[proof] });
  };

  return (
    <div>
      <h4>Which language do you know?</h4>
      <label>
        <input
          type="checkbox"
          checked={languagesKnown.english}
          onChange={() => handleLanguageChange('english')}
        /> English
      </label><br />
      <label>
        <input
          type="checkbox"
          checked={languagesKnown.tamil}
          onChange={() => handleLanguageChange('tamil')}
        /> Tamil
      </label><br />
      <label>
        <input
          type="checkbox"
          checked={languagesKnown.others}
          onChange={() => handleLanguageChange('others')}
        /> Others
      </label>

      <h4>Permissions:</h4>
      <label>
        <input
          type="checkbox"
          checked={permissions.read}
          onChange={() => handlePermissionChange('read')}
        /> Read
      </label><br />
      <label>
        <input
          type="checkbox"
          checked={permissions.write}
          onChange={() => handlePermissionChange('write')}
        /> Write
      </label><br />
      <label>
        <input
          type="checkbox"
          checked={permissions.edit}
          onChange={() => handlePermissionChange('edit')}
        /> Edit
      </label><br />
      <label>
        <input
          type="checkbox"
          checked={permissions.delete}
          onChange={() => handlePermissionChange('delete')}
        /> Delete
      </label>

      <h4>Which ID proof do you have?</h4>
      <label>
        <input
          type="checkbox"
          checked={idProof.aadhar}
          onChange={() => handleIdProofChange('aadhar')}
        /> Aadhar
      </label><br />
      <label>
        <input
          type="checkbox"
          checked={idProof.panCard}
          onChange={() => handleIdProofChange('panCard')}
        /> PAN Card
      </label><br />
      <label>
        <input
          type="checkbox"
          checked={idProof.rationCard}
          onChange={() => handleIdProofChange('rationCard')}
        /> Ration Card
      </label><br />
      <label>
        <input
          type="checkbox"
          checked={idProof.drivingLicense}
          onChange={() => handleIdProofChange('drivingLicense')}
        /> Driving License
      </label>
    </div>
  );
};

export default CheckBoxExample;

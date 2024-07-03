import React from 'react';

const Button = ({ onSubmit, onCancel, onDelete, onOK }) => {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  const handleOK = () => {
    if (onOK) {
      onOK();
    }
  };

  return (
    <div>
      
      <button onClick={handleSubmit}>
        Submit
      </button>

      
      <button onClick={handleCancel}>
        Cancel
      </button>

      
      <button onClick={handleDelete}>
        Delete
      </button>

      <button onClick={handleOK}>
        OK
      </button>
    </div>
  );
};

export default Button;

import React from 'react';

const ApiCallForm = () => {
  return (
    <div>
      <h1>CALL API</h1>
      <div>
        <p><label htmlFor="url">URL:</label></p>
        <textarea
          id="url"
          name="url"
          rows="1"
          cols="20"
        />
      </div>
      <div>
        <p><label htmlFor="postData">POST DATA:</label></p>
        <textarea
          id="postData"
          name="postData"
          rows="4"
          cols="50"
        />
      </div>
      <div>
        <p><label htmlFor="responseData">Response DATA:</label></p>
        <textarea
          id="responseData"
          name="responseData"
          rows="6"
          cols="50"
          readOnly
        />
      </div>
      <br />
      <input type="button" value="GET" />
      <input type="button" value="POST" />
    </div>
  );
};

export default ApiCallForm;

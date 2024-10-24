import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import LoadingBar from 'react-top-loading-bar';
import axios from 'axios';

// npm i react-top-loading-bar

export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [progress, setProgress] = useState(0)
  let history = useNavigate();

  const postData = () => {
    axios.post('https://63b7b2474f17e3a931da1e08.mockapi.io/fakeData', {
      firstName,
      lastName,
      checkbox,
    }).then(() => {
      history('/read');
    })
  }

  const handleButtonClick = () => {
    if (!checkbox) {
      return;
    }
    postData();   // Call the postData function
    setProgress(100); // Set the progress to 100
  }

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <Form className="create-form text-center p-3 mt-5">
        <Form.Field className='p-3'>
          <label>First Name</label>
          <input value={firstName}
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field className='p-3'>
          <label>Last Name</label>
          <input value={lastName}
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field className='p-3'> 
          <Checkbox
            label='I agree to the Terms and Conditions'
            onChange={(e) => setCheckbox(!checkbox)}
            checked={checkbox}
          />
        </Form.Field>
        <Button
          type='submit'
          className='btn btn-success'
          onClick={handleButtonClick}
          disabled={!checkbox}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}
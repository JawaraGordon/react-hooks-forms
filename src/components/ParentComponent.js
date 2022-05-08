import React, { useState } from 'react';
import Form from './Form';
import DisplayData from './DisplayData';

function ParentComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  const [number, setNumber] = useState(0);
  

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
    }
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }

  return (
    <>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        newsletter={newsletter}
        handleNewsletterChange={handleNewsletterChange}
        number={number}
        handleNumberChange={handleNumberChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </>
  );
}

export default ParentComponent;

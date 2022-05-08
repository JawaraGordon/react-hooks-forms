import React, { useState } from 'react';

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
  newsletter,
  handleNewsletterChange,
  number,
  handleNumberChange,
}) {
  return (
    <>
      <form>
        <input
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
          placeholder="Last Name"
        />
        {/* <button type="submit">Submit</button> */}
      </form>

      <form>
        <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
        <input
          type="checkbox"
          id="newsletter"
          checked={newsletter}
          onChange={handleNewsletterChange}
          // {/* checked instead of value */}
        />
        <button type="submit">Submit</button>
      </form>
      <form>
        <input type="number" value={number} onChange={handleNumberChange} />
      </form>
    </>
  );
}

export default Form;

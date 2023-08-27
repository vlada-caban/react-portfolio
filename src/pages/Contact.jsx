import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {

const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name; 
    const inputValue = target.value; 

    if (inputType === 'email') { 
      setEmail(inputValue); 
    } else if (inputType === 'name') { 
      setName(inputValue); 
    } else { 
      setMessage(inputValue); 
    }
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email in invalid');
      return;
    }
    
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
    alert(`Message successfully sent!`);
  };


  return (
    <div className="container pt-4">
      <div className="contactFormSection">
      <h2 className="contactTitle">Let's Connect!</h2>
      <form onSubmit={handleFormSubmit} className="contactFormInputs">
        <div className="form-group formInput">
        <input
         className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter your email"
        />
        </div>
          <div className="form-group formInput">
        <input
          className="form-control"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your name"
        />
        </div>
          <div className="form-group formInput">
        <textarea
          className="form-control"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          rows="5"
          placeholder="Enter your message here"
        />
        </div>
        <button type="submit" className="contactBtn">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
}

// import { useState } from 'react';
// import { validateEmail } from '../utils/helpers';

export default function Contact() {

  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [message, setMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  

  // const handleInputChange = (e) => {
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === 'email') {
  //     setEmail(inputValue);
  //   } else if (inputType === 'name') {
  //     setName(inputValue);
  //   } else {
  //     setMessage(inputValue);
  //   }
  // };

  // const handleOnBlur = (e) => {
  //   const { target } = e;
  //   const inputValue = target.value;

  //   if (!inputValue) {
  //     setErrorMessage('Field cannot be blank');
  //     return;
  //   } else {
  //     setErrorMessage('');
  //   }
  // };


  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   if (!email || !name || !message) {
  //     setErrorMessage('Please fill in all the fields');
  //     return;
  //   }

  //   if (!validateEmail(email)) {
  //     setErrorMessage('Email in invalid');
  //     return;
  //   }

  //   setName('');
  //   setMessage('');
  //   setEmail('');
  //   setErrorMessage('');
  //   alert(`Message successfully sent!`);
  // };

  // width = "640" height = "781" frameborder = "0" marginheight = "0" marginwidth = "0"


  return (
    <div className="container pt-4">
      <div className="contactFormSection">
        <h2 className="contactTitle">Let's Connect!</h2>
        <div className="contactFormContainer">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfbX3RgO29vdyKMFZJrnQtyxgdjElrwC9ANw5jhgvejUdoEYg/viewform?embedded=true" className="contactForm">Loading…</iframe>
        </div>
        {/* <form onSubmit={handleFormSubmit} className="contactFormInputs">
          <div className="form-group formInput">
            <input
              className="form-control"
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleOnBlur}
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
              onBlur={handleOnBlur}
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
              onBlur={handleOnBlur}
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
            <p className="error-text errorMessageContact">{errorMessage}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

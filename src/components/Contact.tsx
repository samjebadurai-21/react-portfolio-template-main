import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_sf46etq', 'template_1l45ix7', templateParams, 'wjM8bUZch9FsXkURs').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error: any) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Based in Coimbatore, Tamil Nadu. Ready to collaborate on exciting projects! Reach out via email at <strong>samjebadurai21022001@gmail.com</strong> or connect with me on LinkedIn.</p>
          <div className="contact-info">
            <p><strong>Location:</strong> Coimbatore, Tamil Nadu - 641024</p>
            <p><strong>Phone:</strong> +91 6381422172</p>
            <p><strong>Email:</strong> samjebadurai21022001@gmail.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sam-jebadurai-534890398" target="_blank" rel="noreferrer">linkedin.com/in/sam-jebadurai-534890398/</a></p>
          </div>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-field"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputProps={{
                  style: { color: 'white' }
                }}
                InputLabelProps={{
                  style: { color: 'rgba(255, 255, 255, 0.7)' }
                }}
              />
              <TextField
                required
                id="email-field"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                InputProps={{
                  style: { color: 'white' }
                }}
                InputLabelProps={{
                  style: { color: 'rgba(255, 255, 255, 0.7)' }
                }}
              />
            </div>
            <TextField
              required
              id="message-field"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              InputProps={{
                style: { color: 'white' }
              }}
              InputLabelProps={{
                style: { color: 'rgba(255, 255, 255, 0.7)' }
              }}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
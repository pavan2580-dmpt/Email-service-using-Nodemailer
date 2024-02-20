import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [html, setHtml] = useState('');

  const sendEmail = async () => {
    try {
      await axios.post('http://localhost:3000/send-email', { to, subject, html });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };

  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    margin: '50px auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid skyblue',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: 'skyblue',
    color: 'white',
    borderRadius: '5px',
    border:'none',
    cursor: 'pointer',
  };

  const textArea={
    width:'100%',
    height:'400px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid skyblue',
    borderRadius: '5px',
    boxSizing: 'border-box',
  }


  return (
    <div style={containerStyle}>
      <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} style={inputStyle} />
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} style={inputStyle} />
      <textarea placeholder="HTML content" style={textArea} value={html} onChange={(e) => setHtml(e.target.value)}  />
      <button onClick={sendEmail} style={buttonStyle}  >Send Email</button>
    </div>
  );
};

export default App;

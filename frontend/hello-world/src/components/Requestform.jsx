import React, { useState } from 'react';
import axios from 'axios';
import './RequestForm.css'; // External styling

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/request', formData);
      setMessage('✅ Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', query: '' });
    } catch (error) {
      setMessage('❌ Form submission failed.');
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2>Request Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="query"
            placeholder="Your Query"
            required
            value={formData.query}
            onChange={handleChange}
            rows="4"
          />
          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default RequestForm;
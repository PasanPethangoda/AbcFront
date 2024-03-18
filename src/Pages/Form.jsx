import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
    patientNIC: '',
    cardType: '',
    price: '',
    cardNumber: '',
    expireDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/formData/submitForm', formData);
      console.log(response.data);
      // Add any additional handling based on the response if needed
    } catch (error) {
      console.error('Error submitting the form:', error.message);
      // Handle error
    }
  };

  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-lg-6">
      <h2 className="mb-4">Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject:</label>
          <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} required />
        </div>

        {/* New fields */}
        <div className="mb-3">
          <label className="form-label">Patient NIC:</label>
          <input type="text" className="form-control" name="patientNIC" value={formData.patientNIC} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Card Type:</label>
          <input type="text" className="form-control" name="cardType" value={formData.cardType} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input type="text" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Card Number:</label>
          <input type="text" className="form-control" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Expire Date:</label>
          <input type="text" className="form-control" name="expireDate" value={formData.expireDate} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">CVV:</label>
          <input type="text" className="form-control" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default FormComponent;




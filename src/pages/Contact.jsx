import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    errors: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formState.name) errors.name = 'Name is required';
    if (!formState.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formState.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formState.message) errors.message = 'Message is required';

    setFormState({ ...formState, errors });

    if (!Object.keys(errors).length) {
      // Handle form submission
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
          {formState.errors.name && <p className="error">{formState.errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          {formState.errors.email && <p className="error">{formState.errors.email}</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
          />
          {formState.errors.message && <p className="error">{formState.errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;

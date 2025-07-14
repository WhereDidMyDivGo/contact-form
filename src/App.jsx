import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((p) => {
      const updatedForm = {
        name: p.name,
        lastName: p.lastName,
        email: p.email,
        queryType: p.queryType,
        message: p.message,
        consent: p.consent,
      };
      updatedForm[name] = value;

      return updatedForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name && form.lastName && form.email && form.queryType && form.consent) {
      console.log({
        name: form.name,
        lastName: form.lastName,
        email: form.email,
        queryType: form.queryType,
        message: form.message,
        consent: form.consent,
      });
    } else {
      console.log("not filled");
    }
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-container">
            <h1 className="title">Contact Us</h1>

            <div className="grouped-input">
              <div className="input-div">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" name="name" className="form-input" value={form.name} onChange={handleChange} required />
              </div>

              <div className="input-div">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="form-input" value={form.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" className="form-input" value={form.email} onChange={handleChange} required />
            </div>

            <div className="input-div">
              <label>Query Type</label>
              <div className="grouped-input">
                <div className="radio-input-div">
                  <label className="radio">
                    <input type="radio" name="queryType" value="general" className="form-radio" checked={form.queryType === "general"} onChange={handleChange} required />
                    <span className="custom"></span>
                  </label>
                  <p>General Enquiry</p>
                </div>

                <div className="radio-input-div">
                  <label className="radio">
                    <input type="radio" name="queryType" value="support" className="form-radio" checked={form.queryType === "support"} onChange={handleChange} required />
                    <span className="custom"></span>
                  </label>
                  <p>Support Request</p>
                </div>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-input" value={form.message} onChange={handleChange}></textarea>
            </div>
          </div>

          <div className="consent-div">
            <label>
              <input type="checkbox" name="consent" required className="form-checkbox" checked={form.consent} onChange={handleChange} />
            </label>
            <p>I consent to being contacted by the team *</p>
          </div>

          <button type="submit" className="submit-button">
            <p>Submit</p>
          </button>
        </form>
      </main>
    </>
  );
}

export default App;

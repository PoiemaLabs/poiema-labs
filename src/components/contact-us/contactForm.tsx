import React, { useState } from "react";
import "../../styles/form.css";

interface FormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    console.log("Made it!");
    const { name, value } = e.target;
    console.log(`new value: ${value}`);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent default form submission

    console.log("Form data submitted:", formData);
  }

  return (
    <div className="contact-form">
      <span className="heading">Contact Us</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name*:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            autoComplete="name"
            required
          />
        <label htmlFor="email">Email*:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            required
          />
        <label htmlFor="company">Company:</label>
          <input
            id="company"
            name="company"
            autoComplete="company"
            onChange={handleChange}
            type="text"
          />
        <label htmlFor="message">Message*:</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            required
            defaultValue={""}
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

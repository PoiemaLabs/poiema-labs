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
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent default form submission

    fetch(
      // "https://us-central1-poiema-labs-llc.cloudfunctions.net/submitForm",
      "http://127.0.0.1:5002/submitForm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          setFormData({ name: "", email: "", company: "", message: "" }); // Reset form
          alert("Thanks for reaching out! We'll be in touch shortly.");
        } else {
          alert("Failed to submit the form. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form. Please try again.");
      });
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

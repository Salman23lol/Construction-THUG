import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",  // Added phoneNo field
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Simulate form submission
    try {
      // Replace this with your form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMessage("Your message has been sent successfully!");
    } catch (error) {
      setErrorMessage("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-auto my-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-xl font-semibold text-orange-600">Contact Us</h1>
          <h1 className="text-3xl font-medium p-1">Get in Touch</h1>
          <p className="w-full max-w-md">
            We'd love to hear from you! Please use the form below to send us a message.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              {successMessage && (
                <div className="mb-4 p-2 bg-green-100 text-green-700 border border-green-300 rounded">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
                  {errorMessage}
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md text-white bg-orange-600 bg-opacity-70 hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Address</h3>
                <p className="text-gray-600">1234 Elm Street, Suite 567, City, State, 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

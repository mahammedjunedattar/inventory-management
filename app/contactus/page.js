import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      
      <p>If you have any questions or need assistance, please reach out to us using the contact details below:</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Contact Information</h2>
      <p><strong>Email:</strong> [Your Email Address]</p>
      <p><strong>Phone:</strong> [Your Contact Number]</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Operating Address</h2>
      <p>[Your Operating Address]</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Customer Support</h2>
      <p>Our customer support team is available [days of the week and hours]. We aim to respond to all inquiries within [number] business days.</p>
    </div>
  );
};

export default ContactUs;

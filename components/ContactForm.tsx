'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [enquiryFullName, setEnquiryFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: enquiryFullName,
          email,
          country,
          phone: phoneNumber,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      // Reset form fields
      setEnquiryFullName('');
      setEmail('');
      setCountry('');
      setPhoneNumber('');
      setMessage('');
      setShowToast(true);

      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className="overflow-auto border-2 mx-8 rounded-[20px] p-5">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Map Section */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448388.6391695161!2d76.50468547343748!3d28.598689499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b009d97262b%3A0x974017a2b36f00ef!2sEasy%20India%20Tour!5e0!3m2!1sen!2sin!4v1741692959606!5m2!1sen!2sin"
            width="100%"
            height="480"
            style={{ border: 0, borderRadius: 25 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="flex-1 overflow-auto border-0 border-[#6e9753] rounded-[20px] sm:p-5">
          <h3 className="text-3xl font-bold">Write to us !</h3>
          <p className="py-6">
            Want to enquire about a package? Have a general query about Indian tours? Write to us to know more details and get a well-tailored package to your needs!
          </p>
          <form id="enquiry-form" onSubmit={onSubmit}>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input type="text" name="fullname" placeholder="Full Name" className="input input-bordered w-full" value={enquiryFullName} onChange={(e) => setEnquiryFullName(e.target.value)} required />
              <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input type="text" name="country" placeholder="Country" className="input input-bordered w-full" value={country} onChange={(e) => setCountry(e.target.value)} required />
              <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <textarea name="message" placeholder="Message" className="textarea textarea-bordered w-full mb-4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <button className="btn bg-[#025C7A] rounded-[41px] text-white px-8 hover:bg-[#6E9753]" type="submit">SUBMIT</button>
          </form>
          {showToast && <div className="mt-3 text-green-600 text-center">Your enquiry has been sent successfully!</div>}
        </div>
      </div>
    </div>
  );
}

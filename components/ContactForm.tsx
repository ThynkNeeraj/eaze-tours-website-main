'use client';

import { FormEvent, useState } from 'react'


export default function ContactForm() {

  const [enquiryFirstName, setEnquiryFirstName] = useState('');
  const [enquiryLastName, setEnquiryLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState('hidden');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await fetch('/api/enquiry', {
      method: 'POST',
      body: JSON.stringify({ Firstname: enquiryFirstName, Lastname: enquiryLastName, email, subject, message }),
    })

    setEnquiryFirstName('');
    setEnquiryLastName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setShowToast('');

    const timeoutId = setTimeout(() => {
      setShowToast('hidden');
    }, 5000);

    return () => clearTimeout(timeoutId)

  }

  return (
    <div className="overflow-auto border-0 border-2 border-[#6e9753] mx-8 rounded-[20px] p-5">
      <h2 className="text-2xl font-bold text-black mb-4">Enquiry Form</h2>
      <form id="enquiry-form" onSubmit={onSubmit}>
        <div className="grid sm:grid-cols-2 grid-rows-2 gap-4 mb-4">
          <div>
            <input type="text" name="name" placeholder="First Name" className="input input-bordered w-full" value={enquiryFirstName} onChange={(e) => setEnquiryFirstName(e.target.value)} required />
          </div>
          <div>
            <input type="text" name="name" placeholder="Last Name" className="input input-bordered w-full" value={enquiryLastName} onChange={(e) => setEnquiryLastName(e.target.value)} required />
          </div>
          <div>
            <input type="phone" name="phone" placeholder="Phone" className="input input-bordered w-full" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>
        <div className="mb-4">
          <input type="text" name="subject" placeholder="Subject" className="input input-bordered w-full" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div className="mb-4">
          <textarea name="message" placeholder="Message" className="textarea textarea-bordered w-full" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <div>
          <button className="btn btn-primary w-full" type="submit">Send</button>
        </div>
      </form>
      <div className={`mt-3 text-green-600 text-center ${showToast}`}>Your enquiry has been sent successfully!</div>
    </div>
  )
}
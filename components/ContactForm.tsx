'use client';

import { FormEvent, useState, useRef, useEffect } from 'react';

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
  "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Denmark", "Djibouti", "Dominica",
  "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Lebanon", "Malaysia", "Maldives", "Mexico", "Mongolia",
  "Morocco", "Myanmar", "Nepal", "Netherlands", "New Zealand", "Nigeria", "North Korea", "Norway", "Pakistan", "Palau",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Russia", "Saudi Arabia", "Serbia", "Singapore", "South Africa",
  "South Korea", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Thailand", "Turkey",
  "United Arab Emirates", "United Kingdom", "United States", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export default function ContactForm() {
  const [enquiryFullName, setEnquiryFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullname: enquiryFullName, email, country, phone: phoneNumber, message }),
      });

      if (!response.ok) throw new Error('Failed to send enquiry');

      setEnquiryFullName('');
      setEmail('');
      setCountry('');
      setPhoneNumber('');
      setMessage('');
      setShowToast(true);

      setTimeout(() => setShowToast(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCountry(value);
    setFilteredCountries(countries.filter(c => c.toLowerCase().includes(value.toLowerCase())));
    setDropdownOpen(true);
  }

  function handleSelect(value: string) {
    setCountry(value);
    setDropdownOpen(false);
  }

  return (
    <div className="overflow-auto border-2 mx-8 rounded-[20px] p-5">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Map Section */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.667004282742!2d77.0722994745707!3d28.579760486476783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aff95555555%3A0x2e6bde5eb7345a17!2sEaze%20Tours!5e0!3m2!1sen!2sin!4v1741698612672!5m2!1sen!2sin"
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
          <h3 className="text-3xl font-bold">Write to us!</h3>
          <p className="py-6">
            Want to enquire about a package? Have a general query about Indian tours? Write to us to know more details and get a well-tailored package to your needs!
          </p>
          <form id="enquiry-form" onSubmit={onSubmit}>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input type="text" name="fullname" placeholder="Full Name" className="input input-bordered w-full" value={enquiryFullName} onChange={(e) => setEnquiryFullName(e.target.value)} required />
              <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {/* Custom Searchable Country Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <input
                  type="text"
                  placeholder="Select or Type Country"
                  className="input input-bordered w-full"
                  value={country}
                  onChange={handleSearch}
                  onFocus={() => setDropdownOpen(true)}
                />
                <div className="absolute right-3 top-3 cursor-pointer">&#9662;</div> {/* Arrow icon */}
                {dropdownOpen && (
                  <ul className="absolute left-0 right-0 max-h-40 overflow-y-auto border border-gray-300 bg-white rounded shadow-md z-10">
                    {filteredCountries.map((c) => (
                      <li key={c} className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={() => handleSelect(c)}>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>

            <textarea name="message" placeholder="Message" className="textarea textarea-bordered w-full mb-4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <button className="btn bg-[#025C7A] text-white px-8 hover:bg-[#6E9753]" type="submit">SUBMIT</button>
          </form>
          {showToast && <div className="mt-3 text-green-600 text-center">Your enquiry has been sent successfully!</div>}
        </div>
      </div>
    </div>
  );
}

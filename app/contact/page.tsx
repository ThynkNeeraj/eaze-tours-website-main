'use client';

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactUs() {

    const [enquiryName, setEnquiryName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showToast, setShowToast] = useState('hidden')
    const router = useRouter();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({ name: enquiryName, email, subject, message }),
        });

        setEnquiryName('');
        setEmail('');
        setMessage('');
        setSubject('');
        setShowToast('');
        setTimeout(() => {
            setShowToast('hidden');
        }, 2000);
        router.push('/thank-you');

    }

    return (
        <div>
            <div className="hero mt-[135px] min-h-screen bg-base-200 min-h-screen">
                <div className={showToast}>
                    <div className="toast toast-center mt-16 z-[999]">
                        <div className="alert alert-success">
                            <span>We have received your query ! Your tailor made itinerary is cooking</span>
                        </div>
                    </div>
                </div>
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <div className="card card-side bg-base-100 shadow-xl mt-5">
                            <div className="card-body">
                                <h2 className="font-bold text-2xl text-center">Head Office - New Delhi</h2>
                                <span className="text-xl text-center">
                                    <p>Eaze Tours</p>
                                    <p>Eaze House  –Second Floor, RZP- 146, Gali No 2 Raj Nagar Part 2, Palam Colony, New Delhi, South West Delhi, 110075</p>
                                </span>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl mt-5">
                            <div className="card-body">
                                <h2 className="font-bold text-2xl text-center">Branch Office – Varanasi</h2>
                                <span className="text-xl text-center">
                                    <p>Eaze House - Sa 6/186-76 Srinagar Colony Pahariya, Varanasi 221007</p>
                                </span>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl mt-5">
                            <div className="card-body">
                                <h2 className="font-bold text-2xl text-center">Contact</h2>
                                <span className="text-xl text-center">
                                    <p>
                                        <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-phone-alt text-lg leading-lg " >   </i>    +91 987 318 6168
                                    </p>
                                    <p>
                                        <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-phone-alt text-lg leading-lg " >   </i>    +91 991 168 4818
                                    </p>
                                    <p>
                                        <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-phone-alt text-lg leading-lg " >   </i>    +91 981 800 6830
                                    </p>
                                    <p>
                                        <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-envelope text-lg leading-lg " >   </i>   info@eazetours.com
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="text-center mt-5">
                            <h3 className="text-3xl font-bold">Write to us !</h3>
                            <p className="p-6">
                                Want to enquire about a package? Have a general query about Indian tours? Write to us to know more details and get a well tailored package to your needs !
                            </p>
                        </div>
                        <form id="enquiry-form" className="card-body" onSubmit={onSubmit}>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" value={enquiryName} onChange={(e) => setEnquiryName(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="subject" placeholder="Subject" className="input input-bordered" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <textarea
                                    placeholder="Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}
                                    className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn bg-[#025C7A] rounded-[41px] text-white px-8 hover:bg-[#6E9753]" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import signature from '../public/images/logo.png';

function Footer() {
  return (
    <footer className="footer flex flex-col bg-[#0D2000] text-white border-t-2 border-gray-300 gap-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-0 justify-between p-6 md:p-10">
        {/* First Column - Logo, Content, and Social Icons */}

        <div className="w-full md:w-[20%] mb-8 text-left pl-1 md:pl-8">
          <Link href="/" passHref><Image className="z-0 mb-4 md:mx-0" src={signature} width={200} height={87} alt="Logo"></Image></Link>

          <p className="text-sm mt-2 mb-4">Established in 2015, Eaze Tours is driven by three travel professionals, with decades of combined varied experience in the tour industry.</p>
          <div className="flex justify-start md:justify-start space-x-2 my-4">

            <a href="https://www.tripadvisor.in/Attraction_Review-g304551-d17734269-Reviews-EAZE_TOURS-New_Delhi_National_Capital_Territory_of_Delhi.html" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
              <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300"><i className="fab fa-tripadvisor text-lg leading-lg" /></span></a>

            <a href="https://www.facebook.com/eazetour/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
              <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300"><i className="fab fa-facebook-f text-lg leading-lg" /></span></a>

            <a href="https://www.pinterest.com/eazetourpackages/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
              <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300"><i className="fab fa-pinterest text-sm leading-lg" /></span></a>

            <a href="https://www.instagram.com/eazetourpackages/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
              <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300"><i className="fab fa-instagram text-lg leading-lg" /></span></a>
          </div>
        </div>

        {/* Second Column - Useful Links */}
        <div className="w-full md:w-[38%] mb-8 pl-1 md:pl-10 md:pt-10">
          <div className="text-lg font-semibold mb-4 border-top-2">India Best Tour Packages</div>
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
            <li><Link href="/forts-and-palaces-india" className="hover:text-blue-600 transition-colors">Fort and Palaces of India</Link></li>
            <li><Link href="/royal-rajasthan-tour-package-india" className="hover:text-blue-600 transition-colors">Luxury Tour Package</Link></li>
            <li><Link href="/gujarat-tribal-tour-package-india" className="hover:text-blue-600 transition-colors">Tribal Tour Package India</Link></li>
            <li><Link href="/kerala-cochin-trivandrum-tour-india" className="hover:text-blue-600 transition-colors">Kerala Tour Package</Link></li>
            <li><Link href="/ayurveda-tour-package-kerala-india" className="hover:text-blue-600 transition-colors">Ayurveda Tour in India</Link></li>
            <li><Link href="/chardham-pilgrimage-tour-package-india" className="hover:text-blue-600 transition-colors">Chardham Tour Package India</Link></li>
            <li><Link href="/tiger-safari-tour-india" className="hover:text-blue-600 transition-colors">Tiger Safari Tour Package</Link></li>
            <li><Link href="/packages" className="hover:text-blue-600 transition-colors">Best Tours to India from USA</Link></li>
            <li><Link href="/wildlife-safari-tour-package-india" className="hover:text-blue-600 transition-colors">Wildlife Tour Package</Link></li>
            <li><Link href="/markha-trek-leh-travel-package" className="hover:text-blue-600 transition-colors">Trekking Tour Package in India</Link></li>
            <li><Link href="/south-india-tour-package-india" className="hover:text-blue-600 transition-colors">South India Tour Package</Link></li>
            <li><Link href="/romantic-andaman-tour-package-india" className="hover:text-blue-600 transition-colors">Honeymoon Tour Package India</Link></li>
          </ul>
        </div>

        {/* Third Column - Top Destinations */}
        <div className="w-full md:w-[14%] mb-8 pl-1 md:pl-6 md:pt-10">
          <div className="text-lg font-semibold mb-4">Top Destinations</div>
          <ul className="space-y-2">
            <li><Link href="/packages/classical-delhi-jaipur-agra-khajurao-varanasi-tour-india" className="hover:text-blue-600 transition-colors">Delhi</Link></li>
            <li><Link href="/packages/forts-of-rajasthan-from-delhi-11-days-package-india" className="hover:text-blue-600 transition-colors">Jaipur</Link></li>
            <li><Link href="/packages/golden-triangle-delhi-agra-jaipur-7-days-package-india" className="hover:text-blue-600 transition-colors">Agra</Link></li>
            <li><Link href="/packages/north-india-temple-tour-package-india" className="hover:text-blue-600 transition-colors">Varanasi</Link></li>
            <li><Link href="/packages/golden-chariot-bangalore-mysore-goa-tour-package-india" className="hover:text-blue-600 transition-colors">Goa</Link></li>
          </ul>
        </div>

        {/* Fouth Column - Top Destinations */}
        <div className="w-full md:w-[13%] mb-8 pl-1 md:pl-6 md:pt-10">
          <div className="text-lg font-semibold mb-4">Useful Links</div>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
            <li><Link href="/packages" className="hover:text-blue-600 transition-colors">Packages</Link></li>
            <li><Link href="/gallery" className="hover:text-blue-600 transition-colors">Gallery</Link></li>
            <li><Link href="/testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Fifth Column - Contact Info */}
        <div className="w-full md:w-[20%] mb-8 pl-1 md:pl-4 md:pt-10">
          <div className="text-lg font-semibold mb-4">Contact Us</div>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <i className="fa fa-phone-alt text-lg text-white-400 -mt-1" />
              <div>
                <p className="text-sm"><a href="tel:+919873186168" className="hover:text-blue-600">+91 98731 86168</a></p>
                <p className="text-sm"><a href="tel:+919911684818" className="hover:text-blue-600">+91 99116 84818</a></p>
                <p className="text-sm"><a href="tel:+919818006830" className="hover:text-blue-600">+91 98180 06830</a></p>
              </div></div>
            <div className="flex items-start space-x-2">
              <i className="far fa-envelope text-lg text-white-400 -mt-1" />
              <div>
                <p className="text-sm"><a href="mailto:info@eazetours.com;" className="hover:text-blue-600">info@eazetours.com</a></p>
                <p className="text-sm"><a href="mailto:harshit@eazetours.com" className="hover:text-blue-600">harshit@eazetours.com</a></p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <i className="fa fa-map-marker-alt text-lg text-white-400 -mt-1" />
              <p className="text-sm"><a href="https://maps.app.goo.gl/H7RTSzRAnT3WYnjr9" className="hover:text-blue-600">Eaze House ~2nd Floor, RZP-146 Palam Colony, New Delhi, South West Delhi, 110075</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full bg-midnight text-white py-7 text-center justify-center border-t border-white border-opacity-50">
        <p className="text-sm">&copy; Copyright <a href="/" className="hover:text-blue-600">Eaze Tours</a> {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

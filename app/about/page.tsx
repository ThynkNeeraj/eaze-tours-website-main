'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from "swiper/modules";

import about1 from '../../public/images/gallery/18.jpg';
import about2 from '../../public/images/gallery/28.jpg';
import about3 from '../../public/images/gallery/30.jpg';
import about4 from '../../public/images/gallery/6.jpg';
import about5 from '../../public/images/gallery/13.jpg';
import harshit from '../../public/images/aboutus/harshit.jpg';
import roshan from '../../public/images/aboutus/jagroshan.jpg';
import manoj from '../../public/images/aboutus/Manoj.jpg';

const images = [
  '/images/gallery/12.jpg',
  '/images/gallery/20.jpg',
  '/images/gallery/10.jpg',
  '/images/gallery/8.jpg',
  '/images/gallery/19.jpg',
  '/images/gallery/16.jpg'
];

const about_us_images = [about2, about1, about3, about4, about5];

export default function About() {
  return (
    <>
      <div className="mt-[78px] sm:mt-[165px] mx-8 mb-12">
        <p className="text-[14px] text-gray-700 mt-4">
          <span className="text-[#ccc]">Home</span> / About us
        </p>
        <h2 className="text-[42px] font-semibold text-black text-center sm:text-left">
          About us
        </h2>
        <p className="text-md text-gray-700 mt-1">
          Let’s explore what we do!
        </p>
      </div>

      <div className="relative mt-[10px] max-w-screen-xl mx-8 h-[480px] rounded-[23px] overflow-hidden flex items-center justify-start p-[20px] sm:p-[80px] bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/gallery/8.jpg")' }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-[900px] py-8 pt-[150px] text-left">
          <h2 className="text-white text-[56px] mb-4 font-semibold leading-[1.2em]"></h2>
          {/* Input Field and Subscribe Button */}
        </div>
      </div>

      <div className="mt-[78px] mx-auto mb-12 w-[45%]">
        <h2 className="text-[42px] font-semibold capitalize text-black text-center leading-[1.2em] mb-4">
          Provide the best travel experience for you
        </h2>
        <p className="text-md text-gray-700 mt-1 text-center">
          We understand that every journey has unique needs. Therefore, we offer customized travel packages designed according to your preferences and budget.
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-4 my-12 max-w-screen-xl mb-[120px] mx-auto sm:flex-nowrap w-[80%]">
        {/* First Box */}
        <div className="w-full sm:w-1/2 relative rounded-[25px] overflow-hidden group">
          {/* Content */}
          <div className="relative p-6 z-10 text-white">
            <Image src="/images/info_icon_2.png" alt="Info Icon 1" width={77} height={77} />
            <h3 className="text-[32px] font-semibold mb-2 sm:w-[60%] w-[80%] font-urbanist">Our Vision</h3>
            <div>
              <p className="mb-4 font-urbanist">
                Our vision is to become a leading travel agency company that provides high-quality services and inspiration for our customer.
              </p>
            </div>
          </div>

          {/* Extra div for zoom effect (background) */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
            style={{
              background: `#6e9753`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        {/* Second Box */}
        <div className="w-full sm:w-1/2 relative rounded-[25px] overflow-hidden group">
          {/* Content */}
          <div className="relative p-6 z-10 text-white">
            <Image src="/images/info_icon_1.png" alt="Info Icon 1" width={77} height={77} />
            <h3 className="text-[32px] font-semibold mb-2 sm:w-[60%] w-[80%] font-urbanist">Our Mission</h3>
            <div>
              <p className="mb-4 font-urbanist">
                Our mission is to become a leading travel agency company that provides high-quality services and inspiration for our customer.
              </p>
            </div>
          </div>

          {/* Extra div for zoom effect (background) */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
            style={{
              background: `#6e9753`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>

      <div className="bg-[#025C7A] flex py-[100px] text-[#fff] justify-center items-center">
        <div className="w-[50%] mx-8"><h3 className="text-[52px] font-semibold mb-4 capitalize font-urbanist leading-[1.2em]">Finding your dream destination is our priority</h3>
          <p className="mb-4 font-urbanist font-semibold">With a collection of destinations that include stunning natural landscapes, vibrant cosmopolitan cities and enchanting tropical islands, we take you to the world's most stunning places.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mx-8 w-[50%]">
          <div className="info-box bg-[#fff] p-4 w-full aspect-square rounded-lg flex flex-col items-left justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><g id="Frame"><path id="Vector" d="M35.7687 7.76411C35.619 7.64744 35.4447 7.5664 35.259 7.52715C35.0732 7.48789 34.881 7.49145 34.6969 7.53755L25.1453 9.92505L15.5594 5.1313C15.2923 4.99808 14.9863 4.96483 14.6969 5.03755L4.69687 7.53755C4.42645 7.60515 4.18638 7.76119 4.01482 7.98088C3.84325 8.20058 3.75004 8.47131 3.75 8.75005V31.2501C3.75003 31.44 3.79334 31.6274 3.87665 31.7981C3.95996 31.9688 4.08107 32.1183 4.23079 32.2352C4.38051 32.352 4.5549 32.4333 4.7407 32.4727C4.92651 32.5121 5.11885 32.5086 5.30312 32.4626L14.8547 30.0751L24.4406 34.8688C24.6146 34.9546 24.806 34.9995 25 35.0001C25.1022 35 25.204 34.9874 25.3031 34.9626L35.3031 32.4626C35.5735 32.395 35.8136 32.2389 35.9852 32.0192C36.1567 31.7995 36.25 31.5288 36.25 31.2501V8.75005C36.25 8.55994 36.2067 8.37231 36.1233 8.20146C36.0399 8.03061 35.9187 7.88104 35.7687 7.76411ZM16.25 8.27193L23.75 12.0219V31.7282L16.25 27.9782V8.27193ZM6.25 9.72661L13.75 7.85161V27.7735L6.25 29.6485V9.72661ZM33.75 30.2735L26.25 32.1485V12.2266L33.75 10.3516V30.2735Z" fill="#FC961B"></path></g></svg>
            <h2 className="info-heading text-2xl font-urbanist font-medium text-black text-left mt-4 mb-2">Lots of choices</h2>
            <p className="info-content text-left text-[#4F5E71] font-[16px] leading-[19px]">
              Thousands of the best destinations are ready to spoil your eyes.
            </p>
          </div>
          <div className="info-box bg-[#fff] p-4 w-full aspect-square rounded-lg flex flex-col items-left justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><g id="Frame"><path id="Vector" d="M28.75 5H11.25C9.92392 5 8.65215 5.52678 7.71447 6.46447C6.77678 7.40215 6.25 8.67392 6.25 10V32.5C6.25 33.163 6.51339 33.7989 6.98223 34.2678C7.45107 34.7366 8.08696 35 8.75 35H12.5C13.163 35 13.7989 34.7366 14.2678 34.2678C14.7366 33.7989 15 33.163 15 32.5V30H25V32.5C25 33.163 25.2634 33.7989 25.7322 34.2678C26.2011 34.7366 26.837 35 27.5 35H31.25C31.913 35 32.5489 34.7366 33.0178 34.2678C33.4866 33.7989 33.75 33.163 33.75 32.5V10C33.75 8.67392 33.2232 7.40215 32.2855 6.46447C31.3479 5.52678 30.0761 5 28.75 5ZM8.75 27.5V18.75H31.25V27.5H8.75ZM8.75 12.5H31.25V16.25H8.75V12.5ZM11.25 7.5H28.75C29.413 7.5 30.0489 7.76339 30.5178 8.23223C30.9866 8.70107 31.25 9.33696 31.25 10H8.75C8.75 9.33696 9.01339 8.70107 9.48223 8.23223C9.95107 7.76339 10.587 7.5 11.25 7.5ZM12.5 32.5H8.75V30H12.5V32.5ZM27.5 32.5V30H31.25V32.5H27.5ZM16.25 23.125C16.25 23.4958 16.14 23.8584 15.934 24.1667C15.728 24.475 15.4351 24.7154 15.0925 24.8573C14.7499 24.9992 14.3729 25.0363 14.0092 24.964C13.6455 24.8916 13.3114 24.713 13.0492 24.4508C12.787 24.1886 12.6084 23.8545 12.536 23.4908C12.4637 23.1271 12.5008 22.7501 12.6427 22.4075C12.7846 22.0649 13.025 21.772 13.3333 21.566C13.6416 21.36 14.0042 21.25 14.375 21.25C14.8723 21.25 15.3492 21.4475 15.7008 21.7992C16.0525 22.1508 16.25 22.6277 16.25 23.125ZM27.5 23.125C27.5 23.4958 27.39 23.8584 27.184 24.1667C26.978 24.475 26.6851 24.7154 26.3425 24.8573C25.9999 24.9992 25.6229 25.0363 25.2592 24.964C24.8955 24.8916 24.5614 24.713 24.2992 24.4508C24.037 24.1886 23.8584 23.8545 23.786 23.4908C23.7137 23.1271 23.7508 22.7501 23.8927 22.4075C24.0346 22.0649 24.275 21.772 24.5833 21.566C24.8916 21.36 25.2542 21.25 25.625 21.25C26.1223 21.25 26.5992 21.4475 26.9508 21.7992C27.3025 22.1508 27.5 22.6277 27.5 23.125ZM38.75 12.5V16.25C38.75 16.5815 38.6183 16.8995 38.3839 17.1339C38.1495 17.3683 37.8315 17.5 37.5 17.5C37.1685 17.5 36.8505 17.3683 36.6161 17.1339C36.3817 16.8995 36.25 16.5815 36.25 16.25V12.5C36.25 12.1685 36.3817 11.8505 36.6161 11.6161C36.8505 11.3817 37.1685 11.25 37.5 11.25C37.8315 11.25 38.1495 11.3817 38.3839 11.6161C38.6183 11.8505 38.75 12.1685 38.75 12.5ZM3.75 12.5V16.25C3.75 16.5815 3.6183 16.8995 3.38388 17.1339C3.14946 17.3683 2.83152 17.5 2.5 17.5C2.16848 17.5 1.85054 17.3683 1.61612 17.1339C1.3817 16.8995 1.25 16.5815 1.25 16.25V12.5C1.25 12.1685 1.3817 11.8505 1.61612 11.6161C1.85054 11.3817 2.16848 11.25 2.5 11.25C2.83152 11.25 3.14946 11.3817 3.38388 11.6161C3.6183 11.8505 3.75 12.1685 3.75 12.5Z" fill="#FF0000"></path></g></svg>
            <h2 className="info-heading text-2xl font-urbanist font-medium text-black text-left mt-4 mb-2">Accomodation</h2>
            <p className="info-content text-left text-[#4F5E71] font-[16px] leading-[19px]">
              There are many choices of interesting destinations to make stories on your trip.
            </p>
          </div>
          <div className="info-box bg-[#fff] p-4 w-full aspect-square rounded-lg flex flex-col items-left justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><g id="Frame"><path id="Vector" d="M20 18.75C20.3315 18.75 20.6495 18.8817 20.8839 19.1161C21.1183 19.3505 21.25 19.6685 21.25 20V22.5H23.75C24.0815 22.5 24.3995 22.6317 24.6339 22.8661C24.8683 23.1005 25 23.4185 25 23.75C25 24.0815 24.8683 24.3995 24.6339 24.6339C24.3995 24.8683 24.0815 25 23.75 25H21.25V27.5C21.25 27.8315 21.1183 28.1495 20.8839 28.3839C20.6495 28.6183 20.3315 28.75 20 28.75C19.6685 28.75 19.3505 28.6183 19.1161 28.3839C18.8817 28.1495 18.75 27.8315 18.75 27.5V25H16.25C15.9185 25 15.6005 24.8683 15.3661 24.6339C15.1317 24.3995 15 24.0815 15 23.75C15 23.4185 15.1317 23.1005 15.3661 22.8661C15.6005 22.6317 15.9185 22.5 16.25 22.5H18.75V20C18.75 19.6685 18.8817 19.3505 19.1161 19.1161C19.3505 18.8817 19.6685 18.75 20 18.75ZM36.25 13.75V31.25C36.25 31.913 35.9866 32.5489 35.5178 33.0178C35.0489 33.4866 34.413 33.75 33.75 33.75H6.25C5.58696 33.75 4.95107 33.4866 4.48223 33.0178C4.01339 32.5489 3.75 31.913 3.75 31.25V10C3.75 9.33696 4.01339 8.70107 4.48223 8.23223C4.95107 7.76339 5.58696 7.5 6.25 7.5H14.5828C15.1235 7.50134 15.6494 7.67665 16.0828 8L20.4172 11.25H33.75C34.413 11.25 35.0489 11.5134 35.5178 11.9822C35.9866 12.4511 36.25 13.087 36.25 13.75ZM6.25 15H14.5828L17.9172 12.5L14.5828 10H6.25V15ZM33.75 13.75H20.4172L16.0828 17C15.6494 17.3234 15.1235 17.4987 14.5828 17.5H6.25V31.25H33.75V13.75Z" fill="#01AA90"></path></g></svg>
            <h2 className="info-heading text-2xl font-urbanist font-medium text-black text-left mt-4 mb-2">Easy Booking</h2>
            <p className="info-content text-left text-[#4F5E71] font-[16px] leading-[19px]">
              No need to be complicated in ordering tickets, order now with a few taps.
            </p>
          </div>
          <div className="info-box bg-[#fff] p-4 w-full aspect-square rounded-lg flex flex-col items-left justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><g id="Frame"><path id="Vector" d="M18.713 34.0532C18.6454 34.3236 18.4894 34.5637 18.2697 34.7352C18.05 34.9068 17.7793 35 17.5005 35C17.3952 35.0006 17.2902 34.988 17.188 34.9625L12.188 33.7125C12.0488 33.6776 11.9167 33.6189 11.7974 33.5391L8.04739 31.0391C7.7716 30.8551 7.5802 30.5691 7.5153 30.244C7.45039 29.9189 7.5173 29.5813 7.70129 29.3055C7.88529 29.0297 8.1713 28.8383 8.49641 28.7734C8.82152 28.7085 9.1591 28.7754 9.43489 28.9594L13.0036 31.3391L17.7943 32.5375C17.9543 32.5764 18.1051 32.6464 18.238 32.7437C18.3709 32.841 18.4833 32.9635 18.5687 33.1044C18.6541 33.2452 18.7108 33.4016 18.7355 33.5644C18.7603 33.7272 18.7526 33.8933 18.713 34.0532ZM39.4458 18.9813C39.3433 19.2928 39.18 19.581 38.9654 19.829C38.7509 20.0771 38.4893 20.2802 38.1958 20.4266L34.4958 22.2766L25.8896 30.8844C25.7368 31.037 25.5472 31.1474 25.3391 31.2049C25.1309 31.2624 24.9115 31.2651 24.7021 31.2125L14.7021 28.7125C14.55 28.6744 14.4064 28.6081 14.2786 28.5172L5.60364 22.3235L1.80989 20.4266C1.21697 20.1302 0.766043 19.6105 0.556249 18.9817C0.346456 18.3529 0.394974 17.6665 0.691135 17.0735L4.57395 9.30943C4.87034 8.71651 5.39008 8.26558 6.01887 8.05579C6.64767 7.846 7.33404 7.89451 7.92707 8.19068L11.3739 9.90943L19.6552 7.5438C19.8799 7.47954 20.118 7.47954 20.3427 7.5438L28.624 9.90943L32.0708 8.19068C32.6639 7.89451 33.3502 7.846 33.979 8.05579C34.6078 8.26558 35.1276 8.71651 35.424 9.30943L39.3068 17.0735C39.4549 17.3665 39.5434 17.686 39.5673 18.0135C39.5911 18.3409 39.5499 18.6699 39.4458 18.9813ZM32.2302 21.0032L27.9786 12.5001H23.0068L16.2505 19.0626C18.2286 20.3266 21.3302 20.6751 24.113 17.8704C24.3303 17.6513 24.621 17.5204 24.9291 17.5028C25.2372 17.4852 25.5409 17.5822 25.7818 17.7751L31.1583 22.0829L32.2302 21.0032ZM2.92707 18.1907L5.69113 19.5735L9.57395 11.8094L6.80989 10.4266L2.92707 18.1907ZM29.3755 23.8532L25.0458 20.386C21.9927 22.886 18.1161 23.2157 14.9036 21.1672C14.5876 20.9662 14.3208 20.6968 14.1229 20.3788C13.925 20.0608 13.8011 19.7025 13.7603 19.3302C13.7195 18.9579 13.7629 18.5812 13.8872 18.2279C14.0115 17.8746 14.2137 17.5538 14.4786 17.2891C14.4824 17.2846 14.4866 17.2804 14.4911 17.2766L21.5005 10.4782L20.0005 10.0501L12.1224 12.3016L7.84582 20.8532L15.5333 26.3454L24.6177 28.6157L29.3755 23.8532ZM37.0693 18.1907L33.1911 10.4266L30.4271 11.8094L34.3099 19.5735L37.0693 18.1907Z" fill="#CF3881"></path></g></svg>
            <h2 className="info-heading text-2xl font-urbanist font-medium text-black text-left mt-4 mb-2">Best Tour Guide</h2>
            <p className="info-content text-left text-[#4F5E71] font-[16px] leading-[19px]">
              Don't worry about traveling anywhere, our tour guide is ready to guide you anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="flex py-[100px] text-[#000] justify-center items-center">
        <div className="mr-12">
          <Image
            src="/images/Rectangle-26.png"
            alt="Background Image"
            width={516} height={600}
          />
        </div>
        <div className="w-[40%] mx-8">
          <h3 className="text-[50px] font-semibold mb-4 capitalize font-urbanist leading-[1.2em]">
            Enjoy exclusive personalized service and an unforgettable experience
          </h3>
          <p className="mb-4 font-urbanist text-[#000] font-semibold">We are a team of professionals with a deep passion for travel. We believe that travel is a window to adventure, cultural discovery and personal growth.
          </p>
        </div>
      </div>

      <div className="flex flex-col py-[100px] text-[#fff] bg-[#025C7A] justify-center items-center">
        <div className="mx-auto mb-12 w-[45%]">
          <h2 className="text-[42px] font-semibold capitalize text-center leading-[1.2em] mb-4">
            Experienced professionals with best service
          </h2>
          <p className="text-md mt-1 text-center">
            Our team consists of experienced professionals and is highly committed to providing the best service to our customers.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-screen-xl mx-8">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="aspect-square object-cover rounded-[23px]"
                  width={380}
                  height={380}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`info-container flex justify-center gap-12 my-[70px] max-w-screen-xl mx-8 flex-wrap sm:flex-nowrap`}>
        <div className="info-box p-0 rounded-lg w-[33%] flex flex-col items-center">
          <Image src="/images/email.png" alt="Info Icon 1" width={77} height={77} />
          <h2 className="info-heading text-[30px] font-urbanist font-medium text-black text-center mt-4 mb-2">Email</h2>
          <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings.
          </p>
          <a className="info-content text-center text-[#3778EE] font-[16px] leading-[19px] mt-4 transition-all duration-300 transform hover:scale-110 hover:font-semibold cursor-pointer">
            info@eazetours.com
          </a>
        </div>

        <div className="info-box p-0 rounded-lg w-[33%] flex flex-col items-center">
          <Image src="/images/phone.png" alt="Info Icon 2" width={77} height={77} />
          <h2 className="info-heading text-[30px] font-urbanist font-medium text-black text-center mt-4 mb-2">Phone</h2>
          <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings.
          </p>
          <a className="info-content text-center text-[#3778EE] font-[16px] leading-[19px] mt-4 transition-all duration-300 transform hover:scale-110 hover:font-semibold cursor-pointer">
            (308) 555-0121
          </a>
        </div>

        <div className="info-box p-0 rounded-lg w-[33%] flex flex-col items-center">
          <Image src="/images/email.png" alt="Info Icon 3" width={77} height={77} />
          <h2 className="info-heading text-[30px] font-urbanist font-medium text-black text-center mt-4 mb-2">Location</h2>
          <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
            <br></br>
            <br></br>
          </p>
          <a className="info-content text-center text-[#3778EE] font-[16px] leading-[19px] mt-4 transition-all duration-300 transform hover:scale-110 hover:font-semibold cursor-pointer">
            View on Google Map
          </a>
        </div>
      </div>

      <div className="bg-[url('/images/Frame-203.png')] bg-cover bg-center flex py-[100px] text-[#000] justify-center items-center">
        <div className="w-[50%] mx-8"><h3 className="text-[52px] font-semibold mb-4 capitalize font-urbanist leading-[1.2em]">Let’s connect and talk about your travel dreams</h3>
          <p className="mb-4 font-urbanist font-semibold">Talk about and plan what your travel dreams are this year, and we will help you to make your dreams come true
          </p>
        </div>

        <form id="enquiry-form" className="card-body">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="input input-bordered bg-[#fff]"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="input input-bordered bg-[#fff]"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="message" className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="textarea textarea-bordered bg-[#fff]"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="h-screen flex flex-col md:flex-row ">
      {/* Left side: Form and address */}
      <div className="flex-1 flex items-center justify-center text-white">
        <div className="lg:w-5/12 md:w-7/12 w-10/12 p-2">
          <h1 className="text-center text-3xl md:text-4xl font-semibold mb-6">Contact Us</h1>
          <form className="flex flex-col items-center" typeof='Submitted'>
            {/* Form fields */}
            <div className="flex items-center text-lg mb-4 relative">
              <FaUser className="absolute ml-5 text-blue-600" size={18} />
              <input type="text" id="name" className="bg-gray-200  text-black rounded-full pl-12 py-2 focus:outline-none w-full" placeholder="Name" />
            </div>
            <div className="flex items-center text-lg mb-4 relative">
              <FaEnvelope className="absolute ml-5 text-blue-600" size={18} />
              <input type="email" id="email" className="bg-gray-200 text-black rounded-full pl-12 py-2 focus:outline-none w-full" placeholder="Email" />
            </div>
            <div className="flex items-center text-lg mb-4 relative">
              <FaPhone className="absolute ml-5 text-blue-600" size={18} />
              <input type="tel" id="phone" className="bg-gray-200 rounded-full  text-black pl-12 py-2 focus:outline-none w-full" placeholder="Phone" />
            </div>
            <div className="flex items-center text-lg mb-4 relative">
              <FaComment className="absolute ml-5 text-blue-600" size={18} />
              <textarea id="message" className="bg-gray-200 rounded-lg pl-12  text-black py-2 focus:outline-none w-full resize-none" rows="5" placeholder="Message"></textarea>
            </div>
            {/* Submit button */}
            <button className="bg-gradient-to-b rounded-full mt-4 w-fit from-purple-500 to-blue-600 border-2 px-2 md:p-4 text-white font-medium hover:from-blue-500 hover:to-purple-600">Send Message</button>
          </form>
          {/* Address */}
         
        </div>
      </div>

      {/* Right side: Map */}
      <div className="flex-1 flex-col mx-5 flex justify-center">
      <div className="mt-6 text-white mb-10">
            <h2 className="text-lg text-white md:text-xl font-semibold mb-2">Our Address:</h2>
            <p>123 Main Street, City, Country</p>
          </div>
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11137.623468632354!2d-74.005941!3d40.712784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903ce155677%3A0xb567152e2845d63!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1645661274677!5m2!1sen!2sbd"
    className="w-full h-[400px] object-center  rounded-2xl"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

    </div>
  );
}

export default ContactUs;

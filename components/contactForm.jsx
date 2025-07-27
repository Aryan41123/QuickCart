// import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets'; // Make sure this path is correct

const ContactForm = () => {
  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row w-full gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            className="rounded-lg shadow-lg w-full h-auto"
            src={assets.contact}
            alt="Contact Us"
            width={800}
            height={600}
            priority
          />
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-6">Our Store</h2>
          <p className="text-gray-700 mb-6">
            Visit our store for an in-person shopping experience. We look forward to welcoming you!
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <p className="text-gray-600 mt-1">
              123 E-Shop Street, <br />
              Downtown City, <br />
              Country 12345
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900">Contact Details</h3>
            <p className="text-gray-600 mt-1">
              Phone: +1-234-567-890 <br />
              Email: contact@QuickCart.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Store Hours</h3>
            <p className="text-gray-600 mt-1">
              Mon - Fri: 9:00 AM - 6:00 PM <br />
              Sat: 10:00 AM - 5:00 PM <br />
              Sun: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

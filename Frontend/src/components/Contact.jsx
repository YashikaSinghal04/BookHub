import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen bg-[#ffe4e6] flex items-center justify-center px-6 py-10">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center bg-white rounded-xl p-8 shadow-lg">
        
        {/* Left Side - Text Info */}
        <div>
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have questions, suggestions, or just want to say hi? Drop us a message — we'd love to hear from you!
          </p>

          <div className="text-sm text-gray-800 space-y-2">
            <p><strong>Email:</strong> support@bookhub.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Instagram:</strong> @bookhub_official</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition">
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
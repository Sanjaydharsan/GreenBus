import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid Layout */}
        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Column 1: Branding and Description */}
          <div>
            <h1 className="text-3xl font-bold">Green Bus</h1>
            <p className="mb-8">India's No. 1 Online Bus Ticket Booking Site</p>
          </div>

          {/* Column 2: Company Links */}
          <div className="pl-12">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white hover:underline">About Us</a></li>
              <li><a href="#" className="text-white hover:underline">Careers</a></li>
              <li><a href="#" className="text-white hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-white hover:underline">Terms of Service</a></li>
              <li><a href="#" className="text-white hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="pl-12">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white hover:underline">Bus Tickets</a></li>
              <li><a href="#" className="text-white hover:underline">Hotel Booking</a></li>
              <li><a href="#" className="text-white hover:underline">Package Deals</a></li>
              <li><a href="#" className="text-white hover:underline">Mobile App</a></li>
            </ul>
          </div>

          {/* Column 4: Customer Support */}
          <div className="pl-12">
            <h3 className="font-semibold text-lg">Customer Care</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white hover:underline">Help Center</a></li>
              <li><a href="#" className="text-white hover:underline">FAQs</a></li>
              <li><a href="#" className="text-white hover:underline">Cancel/Refund</a></li>
              <li><a href="#" className="text-white hover:underline">Payment Options</a></li>
            </ul>
          </div>

          {/* Column 5: Social Media Links */}
          <div className="pl-12">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:underline">
                <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
              </a>
              <a href="#" className="text-white hover:underline">
                <i className="fab fa-twitter"></i> {/* Twitter Icon */}
              </a>
              <a href="#" className="text-white hover:underline">
                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
              </a>
              <a href="#" className="text-white hover:underline">
                <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
              </a>
            </div>
          </div>

        </div>
        
        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-white pt-4 text-center text-sm">
          <p>© 2025 GreenBus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

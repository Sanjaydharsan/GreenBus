// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-green text-white py-6">
//       <div className="container mx-auto  justify-between" >


//         <div>
//         <div className='text-3xl font-bold'>GREEN BUS</div> 
//           <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
//           <p className="text-sm">Email: support@greenbus.com</p>
//           <p className="text-sm">Phone: +123 456 7890</p>
//           <p className="text-sm mt-2">Follow us:</p>
//         </div>
//       </div>
//       <div className="border-t border-white mt-6 pt-4 text-center text-sm">
//         © {new Date().getFullYear()} GreenBus. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Links */}
          <div>
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white hover:underline">About Us</a></li>
              <li><a href="#" className="text-white hover:underline">Careers</a></li>
              <li><a href="#" className="text-white hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-white hover:underline">Terms of Service</a></li>
              <li><a href="#" className="text-white hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white hover:underline">Bus Tickets</a></li>
              <li><a href="#" className="text-white hover:underline">Hotel Booking</a></li>
              <li><a href="#" className="text-white hover:underline">Package Deals</a></li>
              <li><a href="#" className="text-white hover:underline">Mobile App</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="font-semibold text-lg">Customer Care</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white hover:underline">Help Center</a></li>
              <li><a href="#" className="text-white hover:underline">FAQs</a></li>
              <li><a href="#" className="text-white hover:underline">Cancel/Refund</a></li>
              <li><a href="#" className="text-white hover:underline">Payment Options</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:underline">
                <i className="fab fa-facebook-f"></i> {/* FontAwesome icon */}
              </a>
              <a href="#" className="text-white hover:underline">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:underline">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:underline">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white pt-4 text-center text-sm">
          <p>© 2025 GreenBus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

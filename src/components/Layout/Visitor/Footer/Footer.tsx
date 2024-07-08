"use client"
import { EnvelopeIcon, LocationIcon, PhoneXMarkIcon } from "@/components/Icon/svg";
// components/Footer.js

export default function Footer() {
   return (
      <footer className="bg-gray-100 py-10">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="space-y-3 md:space-y-4 ">
                  <h2 className="text-2xl font-bold">Window Shopping BD</h2>
                  <p>
                     Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.
                  </p>
                  <p className="flex items-center">
                     <span className="material-icons mr-2">
                        <LocationIcon className="w-6 h-6" />
                     </span>
                     123 Street, New York, USA
                  </p>
                  <p className="flex items-center">
                     <span className="material-icons mr-2">
                        <EnvelopeIcon className="w-6 h-6" />
                     </span>
                     info@example.com
                  </p>
                  <p className="flex items-center">
                     <span className="material-icons mr-2">
                        <PhoneXMarkIcon />
                     </span>
                     +012 345 67890
                  </p>
               </div>
               <div className="space-y-3 md:space-y-4">
                  <h2 className="text-xl font-bold">Quick Links</h2>
                  <ul className="space-y-2">
                     <li><a href="#" className="hover:underline">Home</a></li>
                     <li><a href="#" className="hover:underline">Our Shop</a></li>
                     <li><a href="#" className="hover:underline">Shop Detail</a></li>
                     <li><a href="#" className="hover:underline">Shopping Cart</a></li>
                     <li><a href="#" className="hover:underline">Checkout</a></li>
                     <li><a href="#" className="hover:underline">Contact Us</a></li>
                  </ul>
               </div>
               <div className="space-y-3 md:space-y-4">
                  <h2 className="text-xl font-bold">Quick Links</h2>
                  <ul className="space-y-2">
                     <li><a href="#" className="hover:underline">Home</a></li>
                     <li><a href="#" className="hover:underline">Our Shop</a></li>
                     <li><a href="#" className="hover:underline">Shop Detail</a></li>
                     <li><a href="#" className="hover:underline">Shopping Cart</a></li>
                     <li><a href="#" className="hover:underline">Checkout</a></li>
                     <li><a href="#" className="hover:underline">Contact Us</a></li>
                  </ul>
               </div>
               <div className="space-y-3 md:space-y-4">
                  <h2 className="text-xl font-bold">Newsletter</h2>
                  <form className="space-y-4">
                     <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     />
                     <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     />
                     <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors"
                     >
                        Subscribe Now
                     </button>
                  </form>
               </div>
            </div>
            <div className="border-t mt-10 pt-6 grid grid-cols-1 lg:grid-cols-2  space-y-2.5 lg:space-y-0 text-sm text-gray-600">
               <p>© Window Shopping BD. All Rights Reserved. Designed by Nezam</p>
               <div className="flex space-x-2.5 md:space-x-4">
                  <img src="path/to/visa.png" alt="Visa" className="h-6" />
                  <img src="path/to/mastercard.png" alt="Mastercard" className="h-6" />
                  <img src="path/to/paypal.png" alt="Paypal" className="h-6" />
                  <img src="path/to/amex.png" alt="American Express" className="h-6" />
                  <img src="path/to/visa-electron.png" alt="Visa Electron" className="h-6" />
                  <img src="path/to/maestro.png" alt="Maestro" className="h-6" />
               </div>
            </div>
         </div>
      </footer>
   );
}

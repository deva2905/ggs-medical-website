import { Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo & Clinic Name */}
          <Link to="/" className="flex items-center gap-2">
            <HeartPulse className="h-8 w-8 text-red-600" />
            <div>
              <h1 className="text-xl font-bold text-blue-800">Heart Care Centre</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">Dr. G.G. Shetty</p>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex space-x-10 items-center absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-700 font-medium transition">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-700 font-medium transition">Contact</Link>
          </div>

          {/* Right Side Button */}
          <Link 
            to="/appointment" 
            className="bg-blue-700 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition shadow-sm"
          >
            Book Appointment
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
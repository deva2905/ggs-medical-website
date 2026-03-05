import { Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo & Doctor Name */}
          <Link to="/" className="flex items-center gap-2">
            <HeartPulse className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-slate-800">Dr. G.G. Shetty</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">MD, DM Cardiology</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition">About</Link>
            <Link to="/services" className="text-slate-600 hover:text-blue-600 font-medium transition">Services</Link>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition">Contact</Link>
            
            {/* Call to Action Button */}
            <Link to="/appointment" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-sm">
              Book Appointment
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
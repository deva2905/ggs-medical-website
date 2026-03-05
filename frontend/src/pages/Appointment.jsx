import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';

const Appointment = () => {
  // 1. State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Male', // Default value
    date: '',
    time: ''
  });

  // 2. State to handle success or error messages
  const [status, setStatus] = useState({ type: '', message: '' });

  // 3. Update state when the user types in the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Send the data to your Node.js backend when submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Booking your appointment...' });

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Appointment booked successfully! We will contact you soon.' });
        // Clear the form after success
        setFormData({ name: '', phone: '', email: '', age: '', gender: 'Male', date: '', time: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to book appointment. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Server error. Please ensure the backend is running.' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <CalendarCheck className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Book an Appointment</h2>
        <p className="text-slate-600">Schedule your consultation with Dr. G.G. Shetty.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
        
        {/* Status Message Display */}
        {status.message && (
          <div className={`p-4 mb-6 rounded-lg font-medium text-center ${
            status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 
            status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 
            'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Personal Details Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="+91 9876543210" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Age *</label>
              <input type="number" name="age" required value={formData.age} onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="45" />
            </div>
          </div>

          {/* Gender & Schedule Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Gender *</label>
              <select name="gender" value={formData.gender} onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
              <input type="date" name="date" required value={formData.date} onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time *</label>
              <input type="time" name="time" required value={formData.time} onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button type="submit" disabled={status.type === 'loading'}
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-70 shadow-md">
              {status.type === 'loading' ? 'Processing...' : 'Confirm Appointment'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Appointment;
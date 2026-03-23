import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';

const Appointment = () => {

  const [formData, setFormData] = useState({
    patientType: 'new', 
    recordId: '',
    volumeNumber: '',
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Male',
    date: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    if (name === "age") {
      if (value < 0 || value > 100) return;
    }

    if (name === "date") {
      const selectedDate = new Date(value);
      const day = selectedDate.getDay();

      if (day === 0 || day === 6) {
        setStatus({
          type: 'error',
          message: 'Appointments are not available on Saturdays or Sundays.'
        });
        setFormData({ ...formData, date: '' });
        return;
      } else {
        setStatus({ type: '', message: '' });
      }
    }

    // Clear Record ID and Volume Number if they switch back to 'new' patient
    if (name === 'patientType' && value === 'new') {
      setFormData({ ...formData, patientType: value, recordId: '', volumeNumber: '' });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setStatus({
        type: 'error',
        message: 'Phone number must be exactly 10 digits.'
      });
      return;
    }

    if (formData.age < 1 || formData.age > 100) {
      setStatus({
        type: 'error',
        message: 'Age must be between 1 and 100.'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Booking your appointment...' });

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Appointment booked successfully! We will contact you soon.'
        });

        // Reset all fields upon success
        setFormData({
          patientType: 'new',
          recordId: '',
          volumeNumber: '',
          name: '',
          phone: '',
          email: '',
          age: '',
          gender: 'Male',
          date: ''
        });

      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to book appointment.'
        });
      }

    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: 'Server error. Please ensure backend is running.'
      });
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

        {status.message && (
          <div className={`p-4 mb-6 rounded-lg font-medium text-center ${
            status.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : status.type === 'error'
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* New / Returning Patient Selection */}
          <div className="pb-4 border-b border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Are you a new or returning patient? *
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Returning Patient Option Moved to the Left */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="patientType"
                  value="returning"
                  checked={formData.patientType === 'returning'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-600 border-slate-300"
                />
                <span className="text-slate-700">I have visited before</span>
              </label>

              {/* New Patient Option Moved to the Right */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="patientType"
                  value="new"
                  checked={formData.patientType === 'new'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-600 border-slate-300"
                />
                <span className="text-slate-700">I am a new patient</span>
              </label>
              
            </div>
          </div>

          {/* Conditional Rendering for Returning Patients */}
          {formData.patientType === 'returning' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Record ID *
                </label>
                <input
                  type="text"
                  name="recordId"
                  required={formData.patientType === 'returning'}
                  value={formData.recordId}
                  onChange={handleChange}
                  placeholder="e.g. 12345"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Volume Number *
                </label>
                <input
                  type="text"
                  name="volumeNumber"
                  required={formData.patientType === 'returning'}
                  value={formData.volumeNumber}
                  onChange={handleChange}
                  placeholder="e.g. 2"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                />
              </div>
            </div>
          )}

          {/* Name + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>
              <div className="flex">
                <span className="px-3 flex items-center bg-slate-100 border border-r-0 border-slate-300 rounded-l-lg text-slate-600">
                  +91
                </span>
                <input
                  type="text"
                  name="phone"
                  required
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className="w-full px-4 py-2 border border-slate-300 rounded-r-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Email + Age */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Age *
              </label>
              <input
                type="number"
                name="age"
                required
                min="1"
                max="100"
                value={formData.age}
                onChange={handleChange}
                placeholder="45"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          {/* Gender + Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                name="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            Confirm Appointment
          </button>

        </form>

      </div>
    </div>
  );
};

export default Appointment;
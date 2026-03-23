import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Calendar, LogOut, Activity } from 'lucide-react';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 1. Fetch data when the dashboard loads
  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('adminToken');

      if (!token) {
        navigate('/admin');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/admin/appointments', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('adminToken');
          navigate('/admin');
          return;
        }

        const data = await response.json();
        
        if (response.ok) {
          setAppointments(data);
        } else {
          setError(data.error || 'Failed to load appointments.');
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError('Server connection error. Ensure the backend is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  // 2. Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  // 3. Handle Status Updates (The new interactive feature)
  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/admin/appointments/${appointmentId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        // Update the React state instantly so the UI changes without a page reload
        setAppointments(appointments.map(appt => 
          appt.appointmentId === appointmentId ? { ...appt, status: newStatus } : appt
        ));
      } else {
        alert('Failed to update status. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server connection error.');
    }
  };

  // 4. Date Formatter
  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-xl font-semibold text-slate-600 animate-pulse">Loading secure data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      
      {/* Dashboard Top Navigation */}
      <nav className="bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Activity className="text-blue-400 w-6 h-6" />
              <span className="font-bold text-xl tracking-wide">Clinic OS</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-slate-800 hover:bg-red-600 px-4 py-2 rounded-lg transition text-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-100 p-3 rounded-xl">
            <Users className="text-blue-700 w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Patient Appointments</h1>
            <p className="text-slate-500">Manage your upcoming schedule</p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 border border-red-200 font-medium">
            {error}
          </div>
        )}

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-sm font-semibold text-slate-600">Date</th>
                  <th className="p-4 text-sm font-semibold text-slate-600">Patient Details</th>
                  <th className="p-4 text-sm font-semibold text-slate-600">Contact</th>
                  <th className="p-4 text-sm font-semibold text-slate-600">Status</th>
                  <th className="p-4 text-sm font-semibold text-slate-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {appointments.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-slate-500 italic">
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  appointments.map((appt) => (
                    <tr key={appt.appointmentId} className="hover:bg-slate-50 transition">
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          {formatDate(appt.date)}
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-900">{appt.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{appt.age} yrs • {appt.gender}</p>
                      </td>
                      <td className="p-4">
                        <p className="text-slate-700 font-medium">{appt.phone}</p>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          appt.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          appt.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {appt.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <select 
                          value={appt.status}
                          onChange={(e) => handleStatusChange(appt.appointmentId, e.target.value)}
                          className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 outline-none cursor-pointer font-medium"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirm</option>
                          <option value="Cancelled">Cancel</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
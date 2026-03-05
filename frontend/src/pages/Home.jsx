import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Expert Cardiac Care</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Advanced Heart Care You Can Trust.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dr. G.G. Shetty brings decades of experience in interventional and preventive cardiology to provide world-class, personalized heart care.
            </p>
            <div className="pt-4 flex gap-4">
              <Link to="/appointment" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg">
                Book an Appointment
              </Link>
              <Link to="/services" className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition">
                Our Services
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-80 h-96 bg-slate-200 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
              <span className="text-slate-400 font-medium">Doctor Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100">
            <ShieldCheck className="w-10 h-10 text-blue-600 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Top Specialist</h3>
              <p className="text-slate-600 mt-2">Board-certified with extensive experience in complex cardiac procedures.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100">
            <Activity className="w-10 h-10 text-blue-600 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Modern Technology</h3>
              <p className="text-slate-600 mt-2">Utilizing the latest advancements in cardiac diagnostics and treatment.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100">
            <Clock className="w-10 h-10 text-blue-600 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Emergency Care</h3>
              <p className="text-slate-600 mt-2">Dedicated support and rapid response protocols for critical heart conditions.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">

      {/* ─── Hero Section ─── */}
      <section className="bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch min-h-[480px]">

          {/* Left — Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-6 px-8 sm:px-12 lg:px-16 py-16">

            <span className="inline-block text-blue-600 font-semibold tracking-widest uppercase text-xs">
              Expert Cardiac Care
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Advanced Heart Care <br />
              <span className="text-blue-700">You Can Trust.</span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-md">
              Dr. G.G. Shetty — Professor, HOD Cardiology at Ramaiah Medical College, and Senior Interventional Cardiologist — brings 30+ years of expertise in world-class, personalized heart care.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition shadow-md"
              >
                Book an Appointment
              </Link>
              <Link
                to="/services"
                className="bg-white text-blue-700 border-2 border-blue-200 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right — Full bleed image, no padding, no border, fills entire half */}
          <div className="md:w-1/2 relative min-h-[320px] md:min-h-0">
            {/*
              TO ADD YOUR IMAGE:
              1. Place your doctor photo in: frontend/public/doctor.jpg
              2. Change src below to: src="/doctor.jpg"
            */}
            <img
              src="/gg_shetty_pic.jpeg"
              alt="Dr. G.G. Shetty"
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            {/* Fallback shown when no image is uploaded yet */}
            <div
              className="absolute inset-0 w-full h-full bg-slate-200 flex-col items-center justify-center gap-3"
              style={{ display: 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-slate-500 text-sm font-semibold">Doctor Image Placeholder</p>
              <p className="text-slate-400 text-xs">Place image at: frontend/public/doctor.jpg</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Quick Highlights Section ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-700 p-3 rounded-lg shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Senior Specialist</h3>
              <p className="text-slate-600 mt-2 text-sm">Professor & Head of Department, Cardiology at Ramaiah Medical College with decades of clinical leadership.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-700 p-3 rounded-lg shrink-0">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Interventional Expertise</h3>
              <p className="text-slate-600 mt-2 text-sm">Specialist in Coronary Angiography and Angioplasty with advanced training at Cleveland Medical Center, USA.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-700 p-3 rounded-lg shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Evening Consultations</h3>
              <p className="text-slate-600 mt-2 text-sm">Clinic hours: Monday – Friday, 6:00 PM to 8:30 PM. Book your appointment online with ease.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="bg-blue-700 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to take care of your heart?</h2>
          <p className="text-blue-100 text-lg">Schedule a consultation with Dr. G.G. Shetty today.</p>
          <Link
            to="/appointment"
            className="inline-block mt-2 bg-white text-blue-700 font-bold px-10 py-3 rounded-full hover:bg-blue-50 transition shadow-lg"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;

import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Dr. G.G. Shetty</h2>
        <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full mb-3"></div>
        <div className="w-10 h-1 bg-red-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 mb-16">

        {/* Profile Card */}
        <div className="md:w-1/3">
          <div className="w-full h-[400px] bg-slate-100 rounded-2xl shadow-lg border-4 border-white overflow-hidden mb-6 relative">
            <img
              src="/gg_shetty2_pic.jpeg"
              alt="Dr. G.G. Shetty"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900">Dr. G.G. Shetty</h3>
            <p className="text-blue-700 font-medium mb-1 text-sm">
              Professor & Head of Department, Cardiology
            </p>
            <p className="text-blue-600 font-medium mb-4 text-sm">
              Ramaiah Medical College (RMC), Bangalore
            </p>
            <p className="text-slate-500 font-medium text-sm mb-1">
              Senior Consultant &
            </p>
            <p className="text-blue-600 font-medium text-sm">
              Interventional Cardiologist
            </p>
            <p className="text-slate-500 font-medium text-sm">
              Ramaiah Memorial Hospital, Bangalore
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-slate-600 text-sm leading-relaxed">
                Currently leading the Department of Cardiology at Ramaiah Medical College while actively practicing as a Senior Interventional Cardiologist, specialising in Coronary Angiography and Angioplasty.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 space-y-8">

          {/* Education */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-700 p-2 rounded-lg">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Education & Qualifications</h3>
            </div>

            <ul className="space-y-3 text-slate-600 ml-12">
              <li>
                <strong className="text-slate-800">MBBS</strong>
                <span className="text-slate-500"> — Karnataka Medical College, Hubli</span>
              </li>
              <li>
                <strong className="text-slate-800">MD General Medicine</strong>
                <span className="text-slate-500"> — MR Medical College, Gulbarga</span>
              </li>
              <li>
                <strong className="text-slate-800">DM Cardiology</strong>
                <span className="text-slate-500"> — IMS BHU, Varanasi (Institute of Medical Sciences, Banaras Hindu University)</span>
              </li>
              <li>
                <strong className="text-slate-800">TAVI Training</strong>
                <span className="text-slate-500"> — University Hospitals, Cleveland Medical Center, USA</span>
              </li>
              <li>
                <strong className="text-slate-800">Fellowships</strong>
                <span className="text-slate-500"> — Awarded 3 Fellowships in Cardiology</span>
              </li>
            </ul>
          </section>

          {/* Experience */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Briefcase className="text-white w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Experience</h3>
            </div>

            <p className="text-slate-700 font-semibold mb-3 ml-12">
              30+ years of clinical and academic experience in Cardiology
            </p>

            <ul className="space-y-2 text-slate-600 ml-12">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-0.5">·</span>
                <span><strong className="text-slate-700">JSS Medical College, Mysore</strong> — Assistant Professor in Medicine</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-0.5">·</span>
                <span><strong className="text-slate-700">JN Medical College, Belgaum</strong></span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-0.5">·</span>
                <span><strong className="text-slate-700">NIMS, Hyderabad</strong> — Senior Resident, Cardiology</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-0.5">·</span>
                <span>
                  <strong className="text-slate-700">G.B. Pant Hospital, New Delhi</strong> — Training in Cardiac Cathlab & Colour Doppler Echocardiography (3 months) as part of DM Cardiology
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-0.5">·</span>
                <span><strong className="text-slate-700">St. John's Medical College, Bangalore</strong> — Lecturer → Assistant Professor → Associate Professor → Professor</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-0.5">·</span>
                <span><strong className="text-slate-700">Belhoul Apollo, Dubai</strong> — Founder Cardiologist</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold mt-0.5">·</span>
                <span><strong className="text-slate-700">Narayana Health, Bangalore</strong> — Senior Consultant, Interventional Cardiologist & Academic Coordinator</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">★</span>
                <span>
                  <strong className="text-slate-800">Currently:</strong> Professor & Head of Department, Cardiology — Ramaiah Medical College (RMC), Bangalore; Senior Consultant Interventional Cardiologist — Ramaiah Memorial Hospital, Bangalore
                </span>
              </li>
            </ul>
          </section>

          {/* Specializations */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Award className="text-white w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Specializations</h3>
            </div>

            <div className="ml-12 mb-4">
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                Currently Performing
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Coronary Angiography
                </span>
                <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Angioplasty (PTCA)
                </span>
              </div>
            </div>

            <div className="ml-12">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Also Performed Throughout Career
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">TAVI</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">Pacemaker Implantation</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">Mitral Valvuloplasty (PTMC)</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">Device Closure of ASD & PDA</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">Peripheral Angioplasty</span>
                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">Tumour Embolisation</span>
              </div>
            </div>
          </section>

          {/* Academic & Research Excellence */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Award className="text-white w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Academic & Research Excellence
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ml-12">

              {/* TOP PRIORITY */}
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-700">16</p>
                <p className="text-sm text-slate-600 mt-1">Publications</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-700">15+</p>
                <p className="text-sm text-slate-600 mt-1">Years of Clinical Research</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-700">10</p>
                <p className="text-sm text-slate-600 mt-1">Conference Presentations</p>
              </div>

              {/* SECONDARY */}
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-700">22</p>
                <p className="text-sm text-slate-600 mt-1">International Conferences Attended</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-700">30</p>
                <p className="text-sm text-slate-600 mt-1">Abstracts & Indexed Journals</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-700">3</p>
                <p className="text-sm text-slate-600 mt-1">Thesis Works</p>
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
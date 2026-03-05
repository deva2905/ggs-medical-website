import { GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Dr. G.G. Shetty</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 mb-16">
        {/* Image / Profile Info */}
        <div className="md:w-1/3">
          <div className="w-full h-[400px] bg-slate-200 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center mb-6">
            <span className="text-slate-400 font-medium">Doctor Portrait Placeholder</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900">Dr. G.G. Shetty</h3>
            <p className="text-blue-600 font-medium mb-4">Senior Consultant Cardiologist</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dedicated to providing comprehensive cardiovascular care with a focus on both advanced interventional procedures and preventive cardiology.
            </p>
          </div>
        </div>

        {/* Biography & Details */}
        <div className="md:w-2/3 space-y-8">
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-blue-600 w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-800">Education & Qualifications</h3>
            </div>
            <ul className="space-y-3 text-slate-600 ml-9">
              <li><strong className="text-slate-700">DM Cardiology</strong> - Top Tier Medical Institute</li>
              <li><strong className="text-slate-700">MD General Medicine</strong></li>
              <li><strong className="text-slate-700">MBBS</strong></li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-blue-600 w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-800">Experience & Memberships</h3>
            </div>
            <ul className="space-y-3 text-slate-600 ml-9">
              <li>Over 15+ years of extensive experience in clinical and interventional cardiology.</li>
              <li>Life Member, Cardiological Society of India (CSI)</li>
              <li>Member, American College of Cardiology (ACC)</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-blue-600 w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-800">Specializations</h3>
            </div>
            <div className="flex flex-wrap gap-3 ml-9">
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Complex Angioplasty</span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Pacemaker Implantation</span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Heart Failure Management</span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Preventive Cardiology</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
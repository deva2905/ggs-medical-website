import { Stethoscope, FlaskConical, Activity } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: "Consultation",
      description: "A thorough one-on-one consultation with Dr. G.G. Shetty covering your cardiac history, current symptoms, risk assessment, and a personalised care plan tailored to your needs.",
      icon: <Stethoscope className="w-8 h-8 text-blue-700" />
    },
    {
      title: "Blood Test",
      description: "Comprehensive cardiac blood panels including lipid profiles, cardiac biomarkers, and metabolic panels to accurately assess your heart health and guide treatment decisions.",
      icon: <FlaskConical className="w-8 h-8 text-blue-700" />
    },
    {
      title: "ECG",
      description: "A quick and non-invasive Electrocardiogram (ECG) to record the electrical activity of your heart, helping detect arrhythmias, blockages, and other cardiac conditions.",
      icon: <Activity className="w-8 h-8 text-blue-700" />
    }
  ];

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full mb-3"></div>
          <div className="w-10 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Focused cardiac care services delivered with precision, experience, and a patient-first approach.
          </p>
        </div>

        {/* Services Grid — 3 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition duration-300"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-red-600 font-semibold hover:text-red-800 flex items-center gap-2 transition">
                Learn more <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;

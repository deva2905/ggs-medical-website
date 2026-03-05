import { Activity, HeartPulse, Stethoscope } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: "ECG & 2D Echo",
      description: "Non-invasive diagnostic tests to evaluate the electrical activity and structural integrity of your heart.",
      icon: <Activity className="w-8 h-8 text-blue-600" />
    },
    {
      title: "TMT (Treadmill Test)",
      description: "Stress testing to determine how well your heart handles workload and to detect underlying coronary artery disease.",
      icon: <Activity className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Coronary Angiography",
      description: "An advanced imaging procedure to accurately diagnose blockages or narrowing in the heart's arteries.",
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Angioplasty & Stenting",
      description: "Minimally invasive interventional procedures to open clogged heart arteries and restore normal blood flow.",
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Pacemaker Implantation",
      description: "Surgical placement of a small device to help regulate slow or irregular heartbeats (arrhythmias).",
      icon: <Activity className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Preventive Cardiology",
      description: "Comprehensive risk assessment and lifestyle modifications to prevent heart attacks and strokes.",
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cardiology Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Providing state-of-the-art diagnostic, interventional, and preventive cardiovascular treatments tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2">
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
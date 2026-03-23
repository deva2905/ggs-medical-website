import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-slate-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact & Location</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full mb-3"></div>
          <div className="w-10 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Reach out for appointments or inquiries. We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information Cards */}
          <div className="space-y-6">

            {/* Address, Phone, Hours card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-700 p-3 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Clinic Address</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Heart Care Centre<br />
                    1202, 35th B Cross, 28th Main<br />
                    Jayanagar 4th T Block<br />
                    Bangalore – 560041
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-700 p-3 rounded-lg shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Reception & Booking</h4>
                  <p className="text-slate-600">+91 99459 88815</p>
                  <p className="text-slate-600">+91 080 2653 4899</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-700 p-3 rounded-lg shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Consultation Hours</h4>
                  <p className="text-slate-600">Monday – Friday: 6:00 PM – 8:30 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Map — pointing to Jayanagar 4th T Block, Bangalore */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8368613806555!2d77.5820!3d12.9250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1510b67c6b9d%3A0x9c9a1e1e1e1e1e1e!2s28th+Main+Rd%2C+Jayanagar+4th+T+Block%2C+Jayanagar%2C+Bengaluru%2C+Karnataka+560041!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] rounded-xl border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Heart Care Centre Location"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

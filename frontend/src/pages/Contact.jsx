import { MapPin, Phone, Mail, Clock, AlertCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-slate-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact & Location</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We are here to help. Reach out for appointments, inquiries, or emergency cardiac care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information Cards */}
          <div className="space-y-6">
            
            {/* Emergency Card */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
              <AlertCircle className="w-8 h-8 text-red-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Cardiac Emergency (24/7)</h3>
                <p className="text-red-600 font-medium text-lg">+91 99999 88888</p>
                <p className="text-red-700 text-sm mt-1">For severe chest pain or suspected heart attacks, call immediately.</p>
              </div>
            </div>

            {/* Address & Regular Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Clinic Address</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Dr. G.G. Shetty Heart Clinic<br />
                    1st Floor, HealthHub Building<br />
                    100 Feet Road, Indiranagar<br />
                    Bengaluru, Karnataka 560038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Reception & Booking</h4>
                  <p className="text-slate-600">+91 80 2345 6789</p>
                  <p className="text-slate-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Consultation Hours</h4>
                  <p className="text-slate-600">Monday - Saturday: 9:00 AM - 1:00 PM, 5:00 PM - 8:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed (Emergencies Only)</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>

          {/* Map Integration */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 h-full min-h-[400px]">
            {/* We are using an iframe for Google Maps. You can easily update the 'src' link to point to your exact location later */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.962002133866!2d77.6385312!3d12.974274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzI3LjQiTiA3N8KwMzgnMTguNyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
              className="w-full h-full rounded-xl border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location">
            </iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
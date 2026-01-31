import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We'd love to hear from you! Schedule an appointment or ask us a question.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Book an Appointment</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We've received your appointment request and will contact you shortly to confirm.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="checkup">Routine Checkup</option>
                        <option value="cleaning">Teeth Cleaning</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your dental needs or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 mb-2">Give us a call during business hours</p>
                      <a href="tel:5551234567" className="text-blue-600 text-lg hover:underline">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 mb-2">Send us an email anytime</p>
                      <a href="mailto:info@brightsmile.com" className="text-blue-600 text-lg hover:underline">
                        info@brightsmile.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600 mb-2">Visit us at our office</p>
                      <p className="text-gray-700">
                        123 Dental Street<br />
                        Suite 100<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-1">Office Hours</h3>
                      <div className="text-gray-700 space-y-1 mt-2">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  123 Dental Street, Suite 100<br />
                  City, State 12345
                </p>
                <p className="text-gray-500 mt-2">Map view would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">Dental Emergency?</h2>
          <p className="text-xl text-red-100 mb-6">
            We offer same-day emergency appointments. Call us immediately if you're experiencing 
            severe pain, trauma, or other urgent dental issues.
          </p>
          <a
            href="tel:5551234567"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transition-colors text-lg"
          >
            Call Emergency Line: (555) 123-4567
          </a>
        </div>
      </section>
    </div>
  );
}

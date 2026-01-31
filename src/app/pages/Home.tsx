import { Link } from 'react-router';
import { Calendar, Award, Heart, Shield, Sparkles, Users, Star } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Home() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Preventive Care',
      description: 'Regular checkups and cleanings to maintain optimal oral health.',
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, bonding, and more.',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Restorative Care',
      description: 'Crowns, bridges, and implants to restore your smile.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'The best dental experience I\'ve ever had! The staff is friendly and professional, and Dr. Smith made me feel completely at ease.',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'I was nervous about my root canal, but the team was amazing. They explained everything and made sure I was comfortable throughout.',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'My teeth whitening results are incredible! I can\'t stop smiling. Highly recommend BrightSmile Dental to everyone.',
    },
  ];

  const features = [
    { icon: <Calendar className="w-6 h-6" />, text: 'Same-Day Appointments' },
    { icon: <Users className="w-6 h-6" />, text: 'Family-Friendly' },
    { icon: <Award className="w-6 h-6" />, text: 'Award-Winning Care' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6">
                Your Smile is Our Priority
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Experience exceptional dental care in a comfortable, modern environment. 
                We're dedicated to helping you achieve and maintain a healthy, beautiful smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-center hover:bg-blue-700 transition-colors text-lg"
                >
                  Book Your Appointment
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full text-center border-2 border-blue-600 hover:bg-blue-50 transition-colors text-lg"
                >
                  Our Services
                </Link>
              </div>
              <div className="flex gap-8 mt-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="text-blue-600">{feature.icon}</div>
                    <span className="text-sm text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBvZmZpY2UlMjBtb2Rlcm4lMjBjbGVhbnxlbnwxfHx8fDE3Njk4MTcwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern dental office"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive dental care for the whole family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684607632845-723f8f427110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMGhhcHB5JTIwc21pbGV8ZW58MXx8fHwxNzY5NzgzOTE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy dental patient"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">Why Choose BrightSmile?</h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">Experienced Team</h3>
                    <p className="text-gray-600">
                      Our skilled dentists and hygienists have decades of combined experience.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">State-of-the-Art Technology</h3>
                    <p className="text-gray-600">
                      We use the latest dental technology for accurate diagnoses and comfortable treatments.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">Gentle, Compassionate Care</h3>
                    <p className="text-gray-600">
                      We understand dental anxiety and strive to make every visit comfortable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">Ready to Start Your Dental Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your appointment today and experience the BrightSmile difference.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

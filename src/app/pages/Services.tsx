import { Link } from 'react-router';
import { Sparkles, Shield, Smile, Zap, Heart, Crown, Stethoscope, Baby } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: 'Preventive Care',
      description: 'Keep your smile healthy with regular checkups and cleanings.',
      details: [
        'Routine dental exams and cleanings',
        'Digital X-rays',
        'Oral cancer screenings',
        'Fluoride treatments',
        'Dental sealants',
      ],
    },
    {
      icon: <Sparkles className="w-10 h-10 text-blue-600" />,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter smile.',
      details: [
        'In-office whitening treatments',
        'Take-home whitening kits',
        'Custom-fitted whitening trays',
        'Safe and effective procedures',
        'Long-lasting results',
      ],
    },
    {
      icon: <Smile className="w-10 h-10 text-blue-600" />,
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our cosmetic procedures.',
      details: [
        'Porcelain veneers',
        'Dental bonding',
        'Smile makeovers',
        'Gum contouring',
        'Tooth-colored fillings',
      ],
    },
    {
      icon: <Crown className="w-10 h-10 text-blue-600" />,
      title: 'Restorative Dentistry',
      description: 'Restore function and appearance to damaged teeth.',
      details: [
        'Dental crowns and bridges',
        'Dental implants',
        'Dentures and partials',
        'Inlays and onlays',
        'Root canal therapy',
      ],
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: 'Emergency Dental Care',
      description: 'Prompt treatment for dental emergencies.',
      details: [
        'Same-day emergency appointments',
        'Treatment for toothaches',
        'Broken or chipped tooth repair',
        'Lost filling or crown replacement',
        'Dental trauma care',
      ],
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
      title: 'Periodontal Care',
      description: 'Specialized treatment for gum disease.',
      details: [
        'Gum disease treatment',
        'Deep cleaning (scaling and root planing)',
        'Periodontal maintenance',
        'Gum grafting',
        'Laser gum therapy',
      ],
    },
    {
      icon: <Heart className="w-10 h-10 text-blue-600" />,
      title: 'Orthodontics',
      description: 'Straighten your teeth for a perfect smile.',
      details: [
        'Traditional braces',
        'Clear aligners',
        'Invisalign treatment',
        'Retainers',
        'Early orthodontic intervention',
      ],
    },
    {
      icon: <Baby className="w-10 h-10 text-blue-600" />,
      title: 'Pediatric Dentistry',
      description: 'Gentle dental care for children of all ages.',
      details: [
        'Infant oral health exams',
        'Cavity prevention',
        'Child-friendly cleanings',
        'Dental sealants for kids',
        'Fluoride treatments',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From routine checkups to advanced cosmetic procedures, we offer comprehensive 
              dental services to keep your smile healthy and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">Advanced Technology</h2>
              <p className="text-lg text-gray-700 mb-6">
                We invest in the latest dental technology to provide you with the most 
                accurate diagnoses and comfortable treatments available.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <div>
                    <h4 className="text-gray-900 mb-1">Digital X-Rays</h4>
                    <p className="text-gray-600">Lower radiation exposure with instant results</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <div>
                    <h4 className="text-gray-900 mb-1">Intraoral Cameras</h4>
                    <p className="text-gray-600">See exactly what we see during your exam</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <div>
                    <h4 className="text-gray-900 mb-1">Laser Dentistry</h4>
                    <p className="text-gray-600">Minimally invasive procedures with faster healing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <div>
                    <h4 className="text-gray-900 mb-1">3D Imaging</h4>
                    <p className="text-gray-600">Precise treatment planning for implants and more</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600721187850-c944924fd48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoeWdpZW5pc3QlMjBjbGVhbmluZyUyMHRlZXRofGVufDF8fHx8MTc2OTgxNzM4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dental technology"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">Need to Schedule an Appointment?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our friendly team is ready to help you achieve your best smile.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

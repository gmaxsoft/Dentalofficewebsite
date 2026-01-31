import { Award, Users, Heart, Clock, Shield, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function About() {
  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Lead Dentist',
      credentials: 'DDS, FAGD',
      bio: 'With over 15 years of experience, Dr. Mitchell is passionate about providing gentle, comprehensive dental care.',
    },
    {
      name: 'Dr. James Carter',
      role: 'Cosmetic Dentist',
      credentials: 'DMD',
      bio: 'Dr. Carter specializes in cosmetic dentistry and has helped thousands of patients achieve their dream smiles.',
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Pediatric Dentist',
      credentials: 'DDS, MS',
      bio: 'Dr. Chen loves working with children and is dedicated to making dental visits fun and stress-free for young patients.',
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Patient-Centered Care',
      description: 'Your comfort and satisfaction are our top priorities. We listen to your concerns and tailor treatments to your needs.',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of dental care through continuing education and advanced technology.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Integrity',
      description: 'We provide honest recommendations and transparent pricing, ensuring you always know what to expect.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We invest in the latest dental technology to provide you with the most advanced treatments available.',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years of Service' },
    { number: '10,000+', label: 'Happy Patients' },
    { number: '5', label: 'Star Rating' },
    { number: '100%', label: 'Satisfaction' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl text-gray-900 mb-6">About BrightSmile Dental</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We've been serving our community with exceptional dental care since 2010, 
              building lasting relationships one smile at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758205307916-4d302e3819f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwdGVhbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk4MTczOTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dental team"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  BrightSmile Dental was founded in 2010 with a simple mission: to provide 
                  exceptional dental care in a warm, welcoming environment where patients feel 
                  like family.
                </p>
                <p>
                  Over the years, we've grown from a small practice to a comprehensive dental 
                  center, but our commitment to personalized care has never wavered. We believe 
                  that every patient deserves to feel heard, understood, and comfortable during 
                  their dental visits.
                </p>
                <p>
                  Today, we're proud to serve thousands of families in our community, offering 
                  everything from routine cleanings to advanced cosmetic procedures. Our team 
                  combines decades of experience with the latest dental technology to deliver 
                  outstanding results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your oral health
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Users className="w-24 h-24 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.credentials}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">A Comfortable Experience</h2>
              <p className="text-lg text-gray-700 mb-6">
                We've designed our office to be a welcoming, stress-free environment where 
                you can relax and receive the best care possible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Flexible Hours</h4>
                    <p className="text-gray-600">Early morning and evening appointments available</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Safety First</h4>
                    <p className="text-gray-600">State-of-the-art sterilization and infection control</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Comfort Amenities</h4>
                    <p className="text-gray-600">Warm blankets, headphones, and sedation options available</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Njk4MTczNDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Comfortable dental office"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

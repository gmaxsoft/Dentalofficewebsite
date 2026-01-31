import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🦷</span>
              </div>
              <span className="text-xl text-white">BrightSmile Dental</span>
            </div>
            <p className="text-sm">
              Providing exceptional dental care with a gentle touch since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@brightsmile.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Dental Street<br />Suite 100<br />City, State 12345</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white text-lg mb-4">Office Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri: 8am - 6pm</span>
              </li>
              <li className="pl-6">Saturday: 9am - 2pm</li>
              <li className="pl-6">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2026 BrightSmile Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

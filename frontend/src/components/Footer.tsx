
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-teal-600 p-4 rounded">
            <h3 className="text-xl mb-4 flex items-center">
              <span className="mr-2">🏠</span> Get in touch
            </h3>
            <ul className="space-y-2">
              <li>Job in Rwanda - (J.I.R Ltd)</li>
              <li>📍 KG 611 St #10 Gishushu</li>
              <li>📮 P.O. Box 4062 Kigali, RWANDA</li>
              <li>📞 (+250) 788 300 952</li>
              <li>✉️ info@jobinrwanda.com</li>
            </ul>
          </div>
          
          <div className="bg-teal-600 p-4 rounded">
            <h3 className="text-xl mb-4 flex items-center">
              <span className="mr-2">📋</span> Our services
            </h3>
            <ul className="space-y-2">
              <li>✓ Advertisement</li>
              <li>✓ Shortlisting</li>
              <li>✓ Recruitment</li>
              <li>✓ Marketing</li>
              <li>✓ Labour Market Data</li>
            </ul>
          </div>
          
          <div className="bg-teal-600 p-4 rounded">
            <h3 className="text-xl mb-4 flex items-center">
              <span className="mr-2">🌐</span> Jobs elsewhere
            </h3>
            <ul className="space-y-2">
              <li>✓ jobinuganda.com</li>
              <li>✓ jobintanzania.com</li>
              <li>✓ jobinkenya.com</li>
              <li>✓ jobinburundi.com</li>
              <li>✓ jobincamer.com</li>
              <li>✓ jobenrdc.com</li>
            </ul>
          </div>
          
          <div className="bg-teal-600 p-4 rounded">
            <h3 className="text-xl mb-4 flex items-center">
              <span className="mr-2">📊</span> Realtime figures
            </h3>
            <ul className="space-y-2">
              <li>Published jobs <span className="bg-black rounded px-2">16,147</span></li>
              <li>Registered employers <span className="bg-black rounded px-2">3,747</span></li>
              <li>Registered job candidates <span className="bg-black rounded px-2">195,980</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
          <a href="#" className="hover:text-blue-400">WhatsApp</a>
        </div>
        
        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>Copyright © 2025 Job in Rwanda - Site owner. All Rights Reserved.</p>
          <p>
            <Link to="/" className="underline hover:text-white">Terms of Use</Link> | 
            <Link to="/" className="underline hover:text-white"> Privacy Policy</Link> | 
            <Link to="/" className="underline hover:text-white"> Site administration</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

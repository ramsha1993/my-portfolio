// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / About */}
        <div>
          {/* <h2 className="text-white text-xl font-bold mb-3">🏠 DreamSquare</h2> */}
      <div className="h-[60px] flex items-center justify-center rounded w-[200px] bg-white"><Image src={'/assets/Skyline_Homes-removebg-preview.png'} width={300} height={200} className='cover ' /></div>
      
          <p className="text-sm leading-6">
            Bringing you closer to your dream home with trusted real estate solutions.  
            Explore, invest, and live better with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Dubai, UAE</li>
            <li>📞 +971 50 123 4567</li>
            <li>📧 info@realestatepro.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RealEstatePro. All rights reserved.
      </div>
    </footer>
  );
}

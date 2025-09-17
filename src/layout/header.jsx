import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import location from '../../public/assets/location.svg';
// import email from '../../public/assets/mail.svg';
// import whatsapp from '../../public/assets/whatsapp.svg';
// import instagram from '../../public/assets/instagram.svg';
// import facebook from '../../public/assets/facebook.svg';
// import twitter from '../../public/assets/twitter.svg';
// import linkedin from '../../public/assets/linkdin.svg';
// import menuIcon from '../../public/assets/ham.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import closeIcon from '../../public/assets/close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all flex flex-col items-center justify-center duration-300 ${isScrolled ? 'bg-black/40 shadow-md' : 'bg-black/40 '}`}>
      {/* Top Bar */}
      <div className="hidden mb-7  lg:flex items-center justify-between px-4 py-2 w-[80%] text-white text-sm">
        <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
            {/* <Image src={email} width={16} height={16} alt="Email" /> */}
          </div>
          <div className="flex items-center space-x-2">
            {/* <Image src={location} width={16} height={16} alt="Location" /> */}
          </div>
  
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:opacity-80 transition h-[16] w-[16]">
            {/* <Image src={whatsapp} width={18} height={18} alt="WhatsApp" /> */}
          </a>
          <a href="#" className="hover:opacity-80 transition h-[16] w-[16]">
            {/* <Image src={instagram} width={16} height={16} alt="Instagram" /> */}
          </a>
          <a href="#" className="hover:opacity-80 transition h-[14] w-[14]">
            {/* <Image src={facebook} width={12} height={12} alt="Facebook" /> */}
          </a>
          <a href="#" className="hover:opacity-80 transition h-[16] w-[16]">
            {/* <Image src={twitter} width={16} height={16} alt="Twitter" /> */}
          </a>
          <a href="#" className="hover:opacity-80 transition h-[16] w-[16]">
            {/* <Image src={linkedin} width={16} height={16} alt="LinkedIn" /> */}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="md:container relative lg:absolute lg:-bottom-10 left-0 right-0 mx-auto md:px-4 py-3 flex justify-between xl:justify-center items-center w-full lg:w-[50%]  bg-[#A81F19] md:bg-transparent">
        {/* Logo - White background only on desktop */}
        <div className="flex-shrink-0 lg:bg-white md:rounded-l-full py-1 px-4 md:px-2">
          <Link href="/"> 
            <Image 
              src="/assets/Skyline_Homes-removebg-preview.png" 
              alt="IE Logo" 
              width={150} 
              height={60} 
              className="h-10 md:h-10 object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center  xl:space-x-8 w-full py-2  bg-[#7A0C11] px-6 justify-between rounded-r-full">
       
       <div className="md:flex items-center space-x-6 py-2 px-4  text-xs xl:text-sm  whitespace-nowrap">  <Link href="/" className="text-white hover:text-gray-200 font-medium transition">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-200 font-medium transition">About Us</Link>
          <Link href="/services" className="text-white hover:text-gray-200 font-medium transition">What we do</Link>
          <Link href="/events" className="text-white hover:text-gray-200 font-medium transition">Events</Link>
          <Link href="/careers" className="text-white hover:text-gray-200 font-medium transition">Pages</Link>
          <Link href="/contact" className="text-white hover:text-gray-200 font-medium transition">Contact</Link>
         
          </div> 
          {/* <Link 
            href="/donate" 
            className="bg-[#DBAC42] text-black hover:bg-gray-100 px-6 py-2 rounded-md font-medium transition-colors"
         style={{whiteSpace:'nowrap'}}
         >
            Donate Now
          </Link> */}
        </nav>
     

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* <Image 
            src={isMenuOpen ? menuIcon : menuIcon} 
            width={24} 
            height={24} 
            alt={isMenuOpen ? 'Close menu' : 'Open menu'} 
          /> */}
        </button>
      </div>

      {/* Mobile Menu - Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 h-screen bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
      
      {/* Mobile Menu - Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="bg-black/40 p-4 flex justify-between items-center">
            <div className="flex-shrink-0">
              <Image 
                // src="/assets/section1/ie_logo.png"
                alt="IE Logo"
                width={80}
                height={40}
                className="h-8 object-contain"
              />
            </div>
            <button 
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
    
    {/* <FontAwesomeIcon icon={faXmark} /> */}
            </button>
          </div>
          
          {/* Mobile Menu Items */}
          <div className="p-4 space-y-2">
            <Link 
              href="/" 
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition"
              onClick={toggleMenu}
            >
              What we do
            </Link>
            <Link 
              href="/events" 
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Events
            </Link>
            {/* <Link 
              href="/projects" 
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Donate
            </Link> */}
            <Link 
              href="/careers" 
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Pages
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              {/* <Link 
                href="/donate" 
                className="block w-full  text-center bg-[#DBAC42] text-black hover:bg-[#c99b2f] lg:px-4 py-3 rounded-md font-medium transition-colors"
                onClick={toggleMenu}
              >
                Donate Now
              </Link>
               */}
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="text-gray-600 hover:text-[#A81F19] transition">
                  {/* <Image src={whatsapp} width={20} height={20} alt="WhatsApp" /> */}
                </a>
                <a href="#" className="text-gray-600 hover:text-[#A81F19] transition">
                  {/* <Image src={instagram} width={20} height={20} alt="Instagram" /> */}
                </a>
                <a href="#" className="text-gray-600 hover:text-[#A81F19] transition">
                  {/* <Image src={facebook} width={20} height={20} alt="Facebook" /> */}
                </a>
                <a href="#" className="text-gray-600 hover:text-[#A81F19] transition">
                  {/* <Image src={twitter} width={20} height={20} alt="Twitter" /> */}
                </a>
                <a href="#" className="text-gray-600 hover:text-[#A81F19] transition">
                  {/* <Image src={linkedin} width={20} height={20} alt="LinkedIn" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Phone } from 'lucide-react';

const PhoneCallButton = ({ phoneNumber = "+919482588199", buttonText = "Call" }) => {
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={handlePhoneCall}
        className="group relative flex items-center gap-3 bg-gradient-to-r from-[#faedcd] to-[#d4a373] 
                 hover:from-[#faedcd] hover:to-[#d4a373]  text-white px-6 py-3 rounded-full
                 transform hover:scale-105 transition-all duration-300 shadow-lg
                 hover:shadow-xl active:scale-95"
      >
        {/* Animated ring effect */}
        <div className="absolute inset-0 rounded-full animate-ping bg-[#d4a373] opacity-20"></div>
        
        {/* Phone icon with rotation animation */}
        <div className="relative flex items-center justify-center w-8 h-8 
                     group-hover:rotate-12 transition-transform duration-300">
          <Phone className="w-6 h-6" />
        </div>
        
        {/* Button text */}
        <span className="text-lg font-semibold tracking-wide">{buttonText}</span>
      </button>
    </div>
  );
};

// Usage example with different screen sizes
const ResponsivePhoneCallButtons = () => {
  return (
    <div className="w-full space-y-4">
      {/* Large screens */}
      <div className="hidden lg:block">
        <PhoneCallButton 
          phoneNumber="+919482588199" 
          buttonText="Call" 
        />
      </div>
      
      {/* Medium screens */}
      <div className="hidden md:block lg:hidden">
        <PhoneCallButton 
          phoneNumber="+919482588199" 
          buttonText="Call" 
        />
      </div>
      
      {/* Small screens */}
      <div className="block md:hidden">
        <PhoneCallButton 
          phoneNumber="+919482588199" 
          buttonText="Call" 
        />
      </div>
    </div>
  );
};

export default ResponsivePhoneCallButtons;
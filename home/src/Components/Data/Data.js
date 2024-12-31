import cultlogo from "../../assets/imgs/CultEventLogo.png"

export const companyData = {
    name: "Cult Events",
    logo: cultlogo, // Replace with actual logo path
    description: "Creating unforgettable wedding experiences with elegance and precision",
    contact: {
      email: "hello@culteventsindia.com",
      phone: "+91 94825 88199",
      address: "JP Nagar, Bengaluru, Karnataka"
    },
    socialMedia: {
      facebook: "https://facebook.com/eternalmoments",
      instagram: "https://instagram.com/eternal.moments",
      pinterest: "https://pinterest.com/eternalmoments",
      twitter: "https://twitter.com/eternalmoments"
    }
  };
  
  export const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/Packages" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" }
  ];
  
  export const services = [
    {
      title: "Full Wedding Planning",
      description: "Comprehensive wedding planning from start to finish",
      icon: "Calendar"
    },
    {
      title: "Partial Planning",
      description: "Support for specific aspects of your wedding",
      icon: "Clock"
    },
    {
      title: "Day-of Coordination",
      description: "Ensuring your wedding day runs smoothly",
      icon: "CheckCircle"
    }
  ];
  
  export const testimonials = [
    {
      name: "Sarah & James",
      comment: "Our dream wedding became reality thanks to Eternal Moments!",
      image: "/api/placeholder/60/60",
      rating: 5
    },
    {
      name: "Emily & Michael",
      comment: "Professional, creative, and absolutely amazing to work with!",
      image: "/api/placeholder/60/60",
      rating: 5
    }
  ];
  
  export const colorScheme = {
    primary: "#faedcd",
    secondary: "#ffcfd2",
    accent1: "#ffc2d1",
    accent2: "#fdc5f5",
    light: "#f8f7ff",
    background: "#fffcf2"
  };
import { 
    Crown, 
    Plane, 
    Minimize2, 
    Leaf, 
    Diamond, 
    Palette,
  } from 'lucide-react';
  
  export const invitationServices = [
      {
        MainServiceName: "Royal/Traditional Wedding",
        SubServiceName: "Invitation and Gift Services",
        description: "With the blessings of our elders and the divine grace above, we joyfully invite you to the royal celebration of [Bride's Name] and [Groom's Name]. Your presence will enhance the grandeur of this auspicious day.",
        icon: Crown,
        image: "royal-wedding.jpg",
        giftIdeas: [
          "Silver-plated photo frames or pooja sets",
          "Luxurious sweet hampers with ornate designs",
          "Handcrafted silk or Kashmiri shawls"
        ]
      },
      {
        MainServiceName: "Destination Wedding",
        SubServiceName: "Invitation and Gift Services",
        description: "Join us for a magical wedding at [Destination Name]. [Bride's Name] and [Groom's Name] are excited to share their special day with you amidst scenic beauty and cherished moments.",
        icon: Plane,
        image: "destination-wedding.jpg",
        giftIdeas: [
          "Travel-themed keepsakes or mini hampers",
          "Local souvenirs like spices, handmade crafts, or wine",
          "Custom travel kits with essentials for the destination"
        ]
      },
      {
        MainServiceName: "Modern/Minimalist Wedding",
        SubServiceName: "Invitation and Gift Services",
        description: "We are thrilled to invite you to witness the union of [Bride's Name] and [Groom's Name]. Please join us for an elegant celebration of love and joy.",
        icon: Minimize2,
        image: "modern-wedding.jpg",
        giftIdeas: [
          "Monogrammed gifts like tote bags or stationery",
          "Minimalist home décor items (candles, vases)",
          "Premium chocolates or artisanal coffee hampers"
        ]
      },
      {
        MainServiceName: "Eco-Friendly Wedding",
        SubServiceName: "Invitation and Gift Services",
        description: "In celebration of love and nature, we invite you to the eco-conscious wedding of [Bride's Name] and [Groom's Name]. Together, let us create beautiful memories while respecting the environment.",
        icon: Leaf,
        image: "eco-wedding.jpg",
        giftIdeas: [
          "Seed packets or plantable cards",
          "Reusable items like bamboo straws or tote bags",
          "Potted plants or succulents"
        ]
      },
      {
        MainServiceName: "Luxury Wedding",
        SubServiceName: "Invitation and Gift Services",
        description: "You're cordially invited to an opulent celebration of love as [Bride's Name] and [Groom's Name] embark on their beautiful journey together. Your presence will make this day truly unforgettable.",
        icon: Diamond,
        image: "luxury-wedding.jpg",
        giftIdeas: [
          "Premium hampers with fine wine, chocolates, and dry fruits",
          "Personalized luxury items like engraved crystalware",
          "Elegant décor items such as candleholders or sculptures"
        ]
      },
      {
        MainServiceName: "Theme-Based Wedding",
        SubServiceName: "Invitation and Gift Services",
        description: "We invite you to immerse yourself in the vibrant world of our theme-based wedding. [Bride's Name] and [Groom's Name] can't wait to celebrate their love story with you in a uniquely designed setting.",
        icon: Palette,
        image: "theme-wedding.jpg",
        giftIdeas: [
          "Customized keepsakes reflecting the theme",
          "Themed photo frames or albums",
          "Gourmet food or cocktail kits matching the wedding theme"
        ]
      }
  ];
  
  export default invitationServices;
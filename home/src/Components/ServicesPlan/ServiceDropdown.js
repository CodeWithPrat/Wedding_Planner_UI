import React, { useState } from "react";
import { ChevronDown, ChevronUp, } from "lucide-react";

const ServiceMenuDropdown = ({ serviceCategories }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleDropdown = (id) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-50 to-background-300 p-4 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className={`group relative rounded-4xl overflow-hidden bg-light-50
                transform transition-all duration-400 ease-bounce-in
                ${hoveredCard === category.id ? 'scale-102 shadow-soft-2xl' : 'shadow-lg'}
                ${activeCategory === category.id ? 'lg:row-span-2' : ''}
                animate-fade-in`}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform transition-transform duration-400 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-background-300/40" />
              </div>

              <div
                className={`cursor-pointer p-6 transition-colors duration-300
                  ${activeCategory === category.id ? 'bg-primary-light/30' : ''}`}
                onClick={() => toggleDropdown(category.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-serif font-bold text-black">
                    {category.title}
                  </h2>
                  {activeCategory === category.id ? (
                    <ChevronUp className="w-6 h-6 text-black animate-bounce-subtle" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-black animate-bounce-subtle" />
                  )}
                </div>
                <p className="text-sm text-black/60 line-clamp-2">
                  {category.description}
                </p>
              </div>

              {activeCategory === category.id && (
                <ul className="p-6 space-y-3 bg-light-50/80  animate-slide-in-up">
                  {category.services.map((service, index) => (
                    <li
                      key={index}
                      className="transform transition-all duration-300
                        text-stone-900 font-medium
                        bg-primary-light/50  rounded-xl
                        px-4 py-3 shadow-inner-lg hover:bg-primary-light
                        hover:shadow-soft-xl animate-fade-in-up"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}

              <div className={`absolute inset-0 pointer-events-none transition-opacity duration-400
                ${hoveredCard === category.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-conic from-accent2-light/20 via-transparent to-accent1-light/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMenuDropdown;
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    budget: '',
    eventDate: '',
    eventDays: '',
    location: '',
    comments: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const budgetOptions = [
    "7 Lakh",
    "Within 15 Lakh",
    "Within 30 Lakh",
    "above 50 Lakh"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }
    
    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required';
    }
    
    if (!formData.eventDays) {
      newErrors.eventDays = 'Number of days is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast('Please check all required fields', 'error');
      return;
    }
  
    setIsLoading(true);
  
    try {
      const formDataWithDate = {
        ...formData,
        submissionDate: new Date().toLocaleString()
      };
  
      // Replace with your new deployment URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxGt48ZwrrB6zPklKFiZNiXkYdmQgj-XpCITFv34hw_accGi6zsbcseVI503u9jEmv8Rw/exec';
  
      // Convert to URL parameters
      const urlParams = new URLSearchParams();
      Object.keys(formDataWithDate).forEach(key => {
        urlParams.append(key, formDataWithDate[key].toString());
      });
  
      // Use GET method instead of POST to avoid CORS preflight
      const response = await fetch(scriptUrl + '?' + urlParams.toString(), {
        method: 'GET', // Changed from POST to GET
        mode: 'no-cors',
      });
  
      // Since we're using no-cors mode, we won't get a readable response
      showToast('Your quote request has been submitted successfully!');
      
      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        budget: '',
        eventDate: '',
        eventDays: '',
        location: '',
        comments: ''
      });
      
    } catch (error) {
      console.error('Error:', error);
      showToast('There was an error submitting your request. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-accent1 mb-4 animate-fade-in-down">
              Get Your Wedding Quote
            </h1>
            <p className="text-gray-600 animate-fade-in">
              Let us help make your special day perfect
            </p>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="animate-fade-in">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:border-secondary 
                  focus:outline-none transition duration-300"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-2 text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            {/* Phone and Email Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="animate-fade-in">
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:border-secondary 
                    focus:outline-none transition duration-300"
                  placeholder="Your phone number"
                />
                {errors.phoneNumber && (
                  <p className="mt-2 text-red-500 text-sm">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Email */}
              <div className="animate-fade-in">
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:border-secondary 
                    focus:outline-none transition duration-300"
                  placeholder="Your email address"
                />
                {errors.email && (
                  <p className="mt-2 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Budget */}
            <div className="animate-fade-in">
              <label className="block text-gray-700 font-medium mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:border-secondary 
                  focus:outline-none transition duration-300"
              >
                <option value="">Select your budget range</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.budget && (
                <p className="mt-2 text-red-500 text-sm">{errors.budget}</p>
              )}
            </div>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Date */}
              <div className="animate-fade-in">
                <label className="block text-gray-700 font-medium mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:border-secondary 
                    focus:outline-none transition duration-300"
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.eventDate && (
                  <p className="mt-2 text-red-500 text-sm">{errors.eventDate}</p>
                )}
              </div>

              {/* Event Days */}
              <div className="animate-fade-in">
                <label className="block text-gray-700 font-medium mb-2">
                  Number of Event Days
                </label>
                <input
                  type="number"
                  name="eventDays"
                  value={formData.eventDays}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:border-secondary 
                    focus:outline-none transition duration-300"
                  min="1"
                  max="10"
                  placeholder="Number of days"
                />
                {errors.eventDays && (
                  <p className="mt-2 text-red-500 text-sm">{errors.eventDays}</p>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="animate-fade-in">
              <label className="block text-gray-700 font-medium mb-2">
                Event Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:border-secondary 
                  focus:outline-none transition duration-300"
                placeholder="Enter event location"
              />
              {errors.location && (
                <p className="mt-2 text-red-500 text-sm">{errors.location}</p>
              )}
            </div>

            {/* Comments */}
            <div className="animate-fade-in">
              <label className="block text-gray-700 font-medium mb-2">
                Special Requests / Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border-2 border-primary focus:border-secondary 
                  focus:outline-none transition duration-300"
                placeholder="Any special requests or comments..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-accent1 hover:bg-accent2 text-white font-bold py-4 px-6 
                rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl
                ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Get Quote'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg
            ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'} 
            text-white animate-slide-in-up`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default Contact;
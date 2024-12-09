import React, { useState } from 'react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You could add actual submission logic here (fetch/axios call, etc.)
    setFormSubmitted(true);
  };

  return (
    <main className="contact-page">
      <h1>Keep in Touch!</h1>
      <div className="w-full px-0">
        <form
          id="contactForm"
          style={{width: '100%'}}
          className="bg-[#fff2cd] p-8 rounded-lg my-8 border-2 border-dotted border-[#ffc629]"
          onSubmit={handleSubmit}
        >
          <div style={{width: '100%'}} className="mb-6">
            <label 
              htmlFor="name" 
              className="wavy-label block"
              style={{ marginBottom: '10px', display: 'block' }}
            >
              Name:
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              style={{width: '100%', boxSizing: 'border-box'}}
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffc629] focus:border-transparent transition-all hover:border-[#ffc629]"
            />
          </div>

          <div style={{width: '100%'}} className="mb-6">
            <label 
              htmlFor="email" 
              className="wavy-label block"
              style={{ marginBottom: '10px', display: 'block' }}
            >
              Email:
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              style={{width: '100%', boxSizing: 'border-box'}}
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffc629] focus:border-transparent transition-all hover:border-[#ffc629]"
            />
          </div>

          <div style={{width: '100%'}} className="mb-6">
            <label 
              htmlFor="message" 
              className="wavy-label block"
              style={{ marginBottom: '10px', display: 'block' }}
            >
              Message:
            </label>
            <textarea 
              id="message" 
              name="message" 
              required
              rows={5}
              style={{width: '100%', boxSizing: 'border-box'}}
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffc629] focus:border-transparent transition-all hover:border-[#ffc629] resize-vertical"
            />
          </div>

          <button 
            type="submit"
            className="
                px-6 py-3 
                rounded-md 
                border border-dotted border-black 
                font-medium 
                bg-white 
                text-black 
                cursor-pointer 
                transition-transform 
                transition-colors 
                duration-300 
                hover:bg-[#ffc629] 
                hover:text-black 
                hover:scale-105 
                hover:shadow-md
            "
            >
            Send Message
            </button>
        </form>

        {formSubmitted && (
          <div
            style={{
              backgroundColor: '#e0ffd4',
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid #4caf50',
              marginTop: '20px',
              textAlign: 'center'
            }}
          >
            Thanks for reaching out! We’ve got your message and will get back to you soon.
          </div>
        )}
      </div>
    </main>
  );
};

export default Contact;

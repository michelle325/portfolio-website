import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <a 
        href="https://www.linkedin.com/in/michelle-lam-27b6b4144/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginLeft: '10px' }}
      >
        <span 
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '20%',
            backgroundColor: '#fff', 
            border: '2px solid white'
          }}
        >    
        <img 
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          alt="LinkedIn" 
          style={{ width: '24px', height: '24px', verticalAlign: 'middle' }}
        />
        </span>  
      </a>
      <p>&copy; {new Date().getFullYear()} Michelle Lam. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

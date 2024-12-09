import React from 'react';

const About: React.FC = () => {
  
  return (
    <main className="about-page">
      <h1>About Me</h1>
      <p>Originally from Texas, Michelle currently resides in Washington, D.C. with her husband and their two pets, Tofu and Meiji. Michelle has experience working in a range of health care settings, including a private therapy practice, community vaccination center, and hospitals. Following her graduating from The University of Austin with a Bachelor's of Science in Psychology, Michelle is currently pursuing a Master's in Software Development. Michelle hopes to combine her medical background to improve health care with emerging technological solutions.</p>
      <div className="pet-container">
        <div className='pet-item'>    
          <h2>Meiji the Cat</h2>
                <img
                src="https://i.imgur.com/hXEN2Zz.jpeg"
                alt="meiji"
                className="pet"
              />
        </div>
        <div className='pet-item'>    
          <h2>Tofu the Dog</h2>
          <img
                src="https://i.imgur.com/xXRX8Tp.jpeg"
                alt="tofu"
                className="pet"
              />
        </div>
      </div>
    </main>
  );
};

export default About;

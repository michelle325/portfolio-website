import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="home-page">
      <h1>Welcome!</h1>
      <div className="profile-container">
      <a href="https://www.linkedin.com/in/michelle-lam-27b6b4144/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQFZTPUwr3a2FA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689048059631?e=1738800000&v=beta&t=YlgWHl0veZCIZENLVMvagqPG5BILB-MA9WYG-EFlS40"
          alt="profile"
          className="profile-pic"
        />
      </a>
        <div className='profile-text'>
          <h2>Michelle Lam</h2>
          <p>"If we merge mercy with might, and might with right, then love becomes our legacy and change, our children’s birthright."</p>
          <p>— Amanda Gorman</p>
        </div>
      </div>
    </main>
  );
};

export default Home;

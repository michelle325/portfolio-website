import React from 'react';

const About: React.FC = () => {
  return (
    <main className="hobby-page">
        <h1>Work Hard, Play Hard</h1>
        <p>Out of the office, Michelle enjoys spending time with her husband and their two pets— a dog named Tofu and cat named Meiji. An outlet of creativity, she often spends weekends at home immersed in her crochet projects. In addition to crocheting, Michelle and her husband share a passion for lion dance and exploring the outdoors.</p>
        <div className='hobby-container'>
          <h2>Crochet</h2>
          <p>Crocheting is a hobby Michelle found during the COVID-19 pandemic as a creative outlet. Years later, her many projects include toys, pet accessories, and articles of clothing.</p>
          <div className="crochet-image">
            <img
            src="https://i.imgur.com/6bapJnh.jpeg"
            alt="crochet1"
            className="crochet"
          />
            <img
            src="https://i.imgur.com/rP6WIG4.png"
            alt="crochet2"
            className="crochet"
          />
            <img
            src="https://i.imgur.com/PZCg1Co.jpeg"
            alt="crochet3"
            className="crochet"
        />
            <img
            src="https://i.imgur.com/HqZmqyg.jpeg"
            alt="crochet4"
            className="crochet"
          />
            <img
            src="https://i.imgur.com/SPtBfGP.jpeg"
            alt="crochet5"
            className="crochet"
        />
        </div>
          <h2>Lion Dance</h2>
          <p>A connection to their culture, Michelle and her husband are on a lion dance team based in Maryland. Lion dance is popular in Asian cultures and incorporates music and martial arts. Lion dance is often composed of two people in the lion, a head and tail, and percussionists playing a drum, gong, and cymbals. Lion dances are often performed at auspicious events such as business openings and weddings to bring good luck, ward off evil spirits, and bring prosperity. Through lion dance, Michelle and her husband connect to their culture while getting a workout in!</p>
          <div className="lion-dance-image">
            <img
            src="https://i.imgur.com/eYtoUwG.png"
            alt="lionDance1"
            className="lion-dance"
          />
            <img
            src="https://i.imgur.com/LF13mkT.jpeg"
            alt="lionDance2"
            className="lion-dance"
          />
            <img
            src="https://i.imgur.com/tL6f5on.png"
            alt="lionDance3"
            className="lion-dance"
        />
        </div>
      </div>
    </main>
  );
};

export default About;

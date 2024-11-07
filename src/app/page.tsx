import React from "react";
import Image from "next/image";
// Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="home-inner">
        <Image 
          src="/about-image.png" 
          alt="Description of image" 
          width={600} 
          height={600} 
          className="home-image"
        />
        <h1 className="home-title">Aslom o Alikom</h1>
        <h1 className="home-subtitle">
          I am <span className="home-highlight">Rimsha Kanwal Arian</span> Full Stack Developer
        </h1>
        <p className="home-paragraph">
          I am a Full Stack developer specializing in creating the visual and interactive aspects of websites and web applications. I use technologies like HTML, CSS, TypeScript, and Next.js to build user interfaces that are both functional and aesthetically pleasing. I ensure a seamless user experience by optimizing performance and ensuring cross-browser compatibility.
        </p>
        <div className="developer-section">
          <Image 
            src="/hero-image.png" 
            alt="Description of image" 
            width={500} 
            height={500} 
            className="home-pulse-image"
          />
          <h3 className="developer-title">
            Full Stack<span className="home-highlight">Developer</span>
          </h3>
          <p className="developer-paragraph">
            I am Rimsha Kanwal Arian, a 23-year-old <span  className="home-highlight">Full Stack</span>  developer. I have acquired skills in Full Stack development and studied on-site at Governor House. I am grateful to Governor Kamran Tessori for initiating my IT education.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

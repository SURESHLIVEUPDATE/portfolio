import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {

  // --- Typing Animation Logic ---
  const titles = ["Cybersecurity Researcher", "SOC Analyst", "Full-Stack Developer", "VFX Paint/Prep Artist", "Graphic Designer", "System Admin"];
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);

  React.useEffect(() => {
    if (index === titles.length) return;

    // Pause at full word
    if (subIndex === titles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 700);
      return;
    }

    // Move to next word
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex(prev => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className='bg-black text-white text-center py-16'>
      
      {/* Profile Image */}
      <img
        src={HeroImage}
        alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />

      {/* Name + Animated Text */}
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Suresh C
        </span>
        ,{" "}
        <span className="typing-text">
          {titles[index]?.substring(0, subIndex)}
        </span>
      </h1>

      {/* Subtitle */}
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern, responsive web applications and have experience across cybersecurity,
      </p>
      <p className='mt-4 text-lg text-gray-300'> system administration, full-stack development, VFX, and graphic design.</p>

      {/* Buttons */}
      <div className='mt-8 space-x-4'>
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Contact With Me
        </button>

        <button
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Resume
        </button>
      </div>

      {/* Typing Cursor Style */}
      <style>
        {`
        .typing-text {
          display: inline-block;
          border-right: 2px solid white;
          padding-right: 4px;
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: white; }
        }
        `}
      </style>
    </div>
  );
};

export default Hero;

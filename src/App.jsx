import { useState, useEffect, useRef } from 'react';
import './index.css';
import DarkModeSwitch from './DarkModeSwitch';
import Socials from './Socials';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-opacity-90 backdrop-blur-sm p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ronald Tsai</h1>
          <div className="space-x-4">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            {/* <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <DarkModeSwitch />
            </button> */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto pt-20 px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center opacity-0 animate-fadeIn">
            <h2 className="text-6xl font-bold mb-4">Hi, I'm Ronald Tsai.</h2>
            <p className="text-3xl">Welcome to my website!</p>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="min-h-screen flex items-center">
          <div className="opacity-0 animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg max-w-2xl">
              Currently, I am a junior at Purdue University double majoring in Computer Science and 
              Linguistics and minoring in English. Given my spanning interests in both technology and 
              language, I am passionate about exploring the intersection of these interdisciplinary 
              fields to better myself, my community, and the world (hopefully). View my resume
              <a href="https://github.com/Ronald-Tsai/Ronald-Tsai.github.io/tree/main/">here</a>. Thanks for stopping by :)
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="min-h-screen flex items-center">
          <div className="opacity-0 animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6">Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', gridAutoRows: '1fr' }}>
              <div>
                <a href="https://akerkar2005.github.io/whatsupboilerup">
                  <div className={`p-4 rounded-lg shadow-md bg-white ${isDarkMode ? 'dark:bg-gray-800': 'dark:bg-gray-200'} transition-transform duration-300 hover:scale-105`}>
                    <h3 className="text-2xl font-semibold">What's Up Boiler Up</h3>
                    <br></br><p>I co-developed a full-stack web application using an event listing page’s RSS feed to help students find upcoming events on Purdue University’s campus through an interactive geographic map. Specifically, I integrated the map using React and managed web-scraped geographic data using Python.</p>
                  </div>
                </a>
              </div>
              <div>
                <a href="https://github.com/Ronald-Tsai/Taiwanese-Hokkien">
                  <div className={`p-4 rounded-lg shadow-md bg-white ${isDarkMode ? 'dark:bg-gray-800': 'dark:bg-gray-200'} transition-transform duration-300 hover:scale-105`}>
                    <h3 className="text-2xl font-semibold">Taiwanese Hokkien Educational Tool</h3>
                    <br></br><p>I am currently developing a full-stack interactive web application to educate about the Taiwanese Hokkien language using open-source translation models and other publicly available resources.</p>
                  </div>
                </a>
              </div>
              <div>
                <a href="https://github.com/qi116/essay-grader">
                  <div className={`p-4 rounded-lg shadow-md bg-white ${isDarkMode ? 'dark:bg-gray-800': 'dark:bg-gray-200'} transition-transform duration-300 hover:scale-105`}>
                    <h3 className="text-2xl font-semibold">NivelMate - AI Essay Grader</h3>
                    <br></br><p>I co-developed an AI essay grader that evaluates essays based on a pre-trained NLP model by creating the user interface with React and establishing front-end to back-end communications.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="min-h-screen flex items-center">
          <div className="opacity-0 animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <p className="text-lg max-w-2xl">
              <Socials />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
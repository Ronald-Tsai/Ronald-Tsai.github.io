import { useState, useEffect, useRef } from 'react';
import './index.css';
import DarkModeSwitch from './DarkModeSwitch';

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
              Resume
            </button>
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button> */}
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <DarkModeSwitch />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto pt-20 px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center opacity-0 animate-fadeIn">
            <h2 className="text-5xl font-bold mb-4">Hi, I'm Ronald Tsai.</h2>
            <p className="text-xl">Welcome to my website!</p>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="min-h-screen flex items-center">
          <div className="opacity-0 animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg max-w-2xl">
              I will update this later.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="min-h-screen flex items-center">
          <div className="opacity-0 animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold">Project 1</h3>
                <p>I will add this later.</p>
              </div>
              <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold">Project 2</h3>
                <p>I will add this later.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section ref={contactRef} className="min-h-screen flex items-center">
          <div className="opacity-0 animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <p className="text-lg max-w-2xl">
              <a href="https://www.linkedin.com/in/ronald-tsai/" className="text-blue-500 hover:underline">LinkedIn </a>
              Feel free to reach out via email at <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
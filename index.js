import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Gitlab, Mail, Twitter, Globe, Reddit, CheckSquare, Calculator, Dice5, Football } from "lucide-react";
import "./index.css";

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "stack", "stats", "projects", "blog", "contact"];
      const scrollPos = window.scrollY + 200;
      for (let sec of sections) {
        const element = document.getElementById(sec);
        if (element && element.offsetTop <= scrollPos && element.offsetTop + element.offsetHeight > scrollPos) {
          setActive(sec);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-sans cursor-crosshair">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 bg-black/90 backdrop-blur-lg z-50 shadow-md flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Drive-for-Java Logo" className="w-10 h-10 rounded-full animate-pulse" />
          <span className="text-red-500 font-bold text-xl">Drive-for-Java</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-6 py-4 text-lg">
          {["home","about","stack","stats","projects","blog","contact"].map(section => (
            <li key={section}>
              <a href={`#${section}`} className={`transition ${active === section ? "text-green-400 font-bold" : "hover:text-red-500"}`}>
                {section.charAt(0).toUpperCase()+section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.img src="/assets/logo.png" alt="Drive-for-Java" className="w-40 h-40 rounded-full border-4 border-green-500 mb-6 shadow-xl hover:scale-110 transition" initial={{scale:0}} animate={{scale:1}} transition={{duration:1}} />
        <motion.h1 className="text-4xl md:text-6xl font-bold text-red-500" initial={{y:-50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}>
          Anshuman Jadiya
        </motion.h1>
        <p className="text-xl mt-4 text-green-400">🚀 Drive-for-Java • Building & Learning</p>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-red-500">About Me</h2>
        <p className="max-w-3xl text-center text-gray-300 leading-relaxed">
          🌱 Exploring the world of Java • 📫 Building apps and tools • 🔭 Passionate about coding & problem-solving • 🎶 Learning HTML & Python • 👋 Always curious and doing more with code
        </p>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="min-h-screen bg-gray-900 px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-green-400 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
          <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
          <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
          <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
          <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
          <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="min-h-screen px-6 py-16 flex flex-col items-center bg-black">
        <h2 className="text-3xl font-bold mb-10 text-red-500">GitHub Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-items-center">
          <img src="https://github-readme-stats.vercel.app/api?username=anshumanjadiya1102&theme=dark&hide_border=false&include_all_commits=true&count_private=true" className="shadow-lg hover:scale-105 transition" />
          <img src="https://nirzak-streak-stats.vercel.app/?user=anshumanjadiya1102&theme=dark&hide_border=false" className="shadow-lg hover:scale-105 transition" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anshumanjadiya1102&theme=dark&hide_border=false&layout=compact" className="shadow-lg hover:scale-105 transition" />
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=anshumanjadiya1102&bg_color=0d1117&color=ffffff&line=f85c03&point=ffffff&area=true&hide_border=true" className="shadow-lg hover:scale-105 transition" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen bg-gray-900 px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-green-400 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Calculator */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition w-full md:w-80">
            <Calculator className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-green-400 mb-2">Calculator</h3>
            <p className="text-gray-300 mb-4">A simple Java calculator app with basic arithmetic operations.</p>
            <a href="#" target="_blank" className="inline-block bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition">View on GitHub</a>
          </div>

          {/* Todo App */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-green-500/30 transition w-full md:w-80">
            <CheckSquare className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-red-400 mb-2">Todo App</h3>
            <p className="text-gray-300 mb-4">Task manager app to add, delete and mark completed todos.</p>
            <a href="#" target="_blank" className="inline-block bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition">View on GitHub</a>
          </div>

          {/* Number Guessing Game */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition w-full md:w-80">
            <Dice5 className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold text-green-400 mb-2">Number Guessing Game</h3>
            <p className="text-gray-300 mb-4">Java console game where you guess the secret number.</p>
            <a href="#" target="_blank" className="inline-block bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition">View on GitHub</a>
          </div>

          {/* Football Game */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition w-full md:w-80">
            <Football className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-red-400 mb-2">Football Game</h3>
            <p className="text-gray-300 mb-4">A simple football game simulation built in Java.</p>
            <a href="#" target="_blank" className="inline-block bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="min-h-screen px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-red-500 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1,2,3].map(post => (
            <div key={post} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition shadow-md">
              <h3 className="text-xl font-bold text-green-400 mb-2">Blog Post {post}</h3>
              <p className="text-gray-300 mb-4">This is a placeholder for an awesome blog post. You can write about coding, projects, or tutorials.</p>
              <a href="#" className="text-red-400 hover:underline">Read More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen bg-gray-900 px-6 py-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10 text-green-400">Contact Me</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://anshumanjadiya1102.github.io" target="_blank"><Globe className="w-10 h-10 text-red-400 hover:scale-125 transition" /></a>
          <a href="https://github.com/anshumanjadiya1102" target="_blank"><Github className="w-10 h-10 text-green-400 hover:scale-125 transition" /></a>
          <a href="https://gitlab.com/anshumanjadiya1102" target="_blank"><Gitlab className="w-10 h-10 text-red-500 hover:scale-125 transition" /></a>
          <a href="mailto:anshuman.jadiya03@gmail.com" target="_blank"><Mail className="w-10 h-10 text-yellow-400 hover:scale-125 transition" /></a>
          <a href="https://x.com/anshumanjadiya" target="_blank"><Twitter className="w-10 h-10 text-blue-400 hover:scale-125 transition" /></a>
          <a href="https://www.reddit.com/user/anshumanjadiya1102/" target="_blank"><Reddit className="w-10 h-10 text-orange-500 hover:scale-125 transition" /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center border-t border-gray-800">
        <p className="text-gray-400">© 2025 Drive-for-Java • Built with ❤️ by Anshuman Jadiya</p>
      </footer>
    </div>
  );
}

export default App;

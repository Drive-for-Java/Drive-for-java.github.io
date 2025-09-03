<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Drive-for-Java | Anshuman Jadiya</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico" />

    <!-- TailwindCSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <style>
      html {
        scroll-behavior: smooth;
      }

      /* Custom cursor */
      body {
        cursor: none;
      }
      .cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, red, green);
        mix-blend-mode: difference;
        animation: pulse 2s infinite;
      }
      @keyframes pulse {
        0%,
        100% {
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          transform: translate(-50%, -50%) scale(1.3);
        }
      }
    </style>
  </head>
  <body class="bg-black text-white font-sans">
    <!-- Navbar -->
    <nav
      class="fixed w-full top-0 left-0 bg-black/90 backdrop-blur-lg z-50 shadow-md flex items-center justify-between px-6"
    >
      <div class="flex items-center space-x-2">
        <img
          src="assets/logo.png"
          alt="Drive-for-Java Logo"
          class="w-10 h-10 rounded-full animate-pulse"
        />
        <span class="text-red-500 font-bold text-xl">Drive-for-Java</span>
      </div>
      <ul class="flex space-x-6 py-4 text-lg">
        <li><a href="#home" class="hover:text-red-500">Home</a></li>
        <li><a href="#about" class="hover:text-red-500">About</a></li>
        <li><a href="#stack" class="hover:text-red-500">Stack</a></li>
        <li><a href="#stats" class="hover:text-red-500">Stats</a></li>
        <li><a href="#projects" class="hover:text-red-500">Projects</a></li>
        <li><a href="#blog" class="hover:text-red-500">Blog</a></li>
        <li><a href="#contact" class="hover:text-red-500">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero -->
    <section
      id="home"
      class="h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <img
        src="assets/logo.png"
        alt="Drive-for-Java"
        class="w-40 h-40 rounded-full border-4 border-green-500 mb-6 shadow-xl hover:scale-110 transition"
      />
      <h1 class="text-4xl md:text-6xl font-bold text-red-500">
        Anshuman Jadiya
      </h1>
      <p class="text-xl mt-4 text-green-400">
        🚀 Drive-for-Java • Building & Learning
      </p>
    </section>

    <!-- About -->
    <section
      id="about"
      class="min-h-screen flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 class="text-3xl font-bold mb-6 text-red-500">About Me</h2>
      <p class="max-w-3xl text-center text-gray-300 leading-relaxed">
        🌱 Exploring the world of Java • 📫 Building apps and tools • 🔭
        Passionate about coding & problem-solving • 🎶 Learning HTML & Python •
        👋 Always curious and doing more with code
      </p>
    </section>

    <!-- Tech Stack -->
    <section id="stack" class="min-h-screen bg-gray-900 px-6 py-16">
      <h2 class="text-3xl font-bold mb-10 text-green-400 text-center">
        Tech Stack
      </h2>
      <div class="flex flex-wrap justify-center gap-4">
        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
        <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
      </div>
    </section>

    <!-- Stats -->
    <section
      id="stats"
      class="min-h-screen px-6 py-16 flex flex-col items-center bg-black"
    >
      <h2 class="text-3xl font-bold mb-10 text-red-500">GitHub Stats</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-items-center"
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=anshumanjadiya1102&theme=dark&hide_border=false&include_all_commits=true&count_private=true"
          class="shadow-lg hover:scale-105 transition"
        />
        <img
          src="https://nirzak-streak-stats.vercel.app/?user=anshumanjadiya1102&theme=dark&hide_border=false"
          class="shadow-lg hover:scale-105 transition"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=anshumanjadiya1102&theme=dark&hide_border=false&layout=compact"
          class="shadow-lg hover:scale-105 transition"
        />
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=anshumanjadiya1102&bg_color=0d1117&color=ffffff&line=f85c03&point=ffffff&area=true&hide_border=true"
          class="shadow-lg hover:scale-105 transition"
        />
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="min-h-screen bg-gray-900 px-6 py-16">
      <h2 class="text-3xl font-bold mb-10 text-green-400 text-center">
        Projects
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      >
        <div
          class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition w-full md:w-80"
        >
          <h3 class="text-xl font-bold text-green-400 mb-2">Calculator</h3>
          <p class="text-gray-300 mb-4">A simple Java calculator app.</p>
          <a
            href="#"
            class="inline-block bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >View on GitHub</a
          >
        </div>
        <div
          class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-green-500/30 transition w-full md:w-80"
        >
          <h3 class="text-xl font-bold text-red-400 mb-2">Todo App</h3>
          <p class="text-gray-300 mb-4">Task manager app in Java.</p>
          <a
            href="#"
            class="inline-block bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >View on GitHub</a
          >
        </div>
        <div
          class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition w-full md:w-80"
        >
          <h3 class="text-xl font-bold text-green-400 mb-2">
            Number Guessing Game
          </h3>
          <p class="text-gray-300 mb-4">Java console number guessing game.</p>
          <a
            href="#"
            class="inline-block bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
            >View on GitHub</a
          >
        </div>
        <div
          class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition w-full md:w-80"
        >
          <h3 class="text-xl font-bold text-red-400 mb-2">Football Game</h3>
          <p class="text-gray-300 mb-4">Java football game simulation.</p>
          <a
            href="#"
            class="inline-block bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >View on GitHub</a
          >
        </div>
      </div>
    </section>

    <!-- Blog -->
    <section id="blog" class="min-h-screen px-6 py-16">
      <h2 class="text-3xl font-bold mb-10 text-red-500 text-center">Blog</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="bg-gray-800 p-6 rounded-xl hover:scale-105 transition shadow-md"
        >
          <h3 class="text-xl font-bold text-green-400 mb-2">Blog Post 1</h3>
          <p class="text-gray-300 mb-4">
            Placeholder blog about coding, projects, or tutorials.
          </p>
          <a href="#" class="text-red-400 hover:underline">Read More →</a>
        </div>
        <div
          class="bg-gray-800 p-6 rounded-xl hover:scale-105 transition shadow-md"
        >
          <h3 class="text-xl font-bold text-green-400 mb-2">Blog Post 2</h3>
          <p class="text-gray-300 mb-4">
            Placeholder blog about coding, projects, or tutorials.
          </p>
          <a href="#" class="text-red-400 hover:underline">Read More →</a>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section
      id="contact"
      class="min-h-screen bg-gray-900 px-6 py-16 flex flex-col items-center"
    >
      <h2 class="text-3xl font-bold mb-10 text-green-400">Contact & Links</h2>
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-lg text-center"
      >
        <a href="https://anshumanjadiya1102.github.io" target="_blank"
          >🌍 Website</a
        >
        <a href="https://github.com/anshumanjadiya1102" target="_blank">💻 GitHub</a>
        <a href="https://gitlab.com/anshumanjadiya1102" target="_blank">🦊 GitLab</a>
        <a href="mailto:anshuman.jadiya03@gmail.com">📧 Email</a>
        <a href="https://discord.gg/68mtBJqRgs" target="_blank">💬 Discord</a>
        <a href="https://bitbucket.org/anshumanjadiya1102/workspace/overview/" target="_blank">📂 Bitbucket</a>
        <a href="https://www.reddit.com/user/anshumanjadiya1102/" target="_blank">🗽 Reddit</a>
        <a href="https://dev.to/anshumanjadiya1102" target="_blank">🐱‍🏍 Dev.to</a>
        <a href="https://x.com/anshumanjadiya" target="_blank">⚓ X.com</a>
        <a href="https://forem.com/anshumanjadiya1102" target="_blank">🎨 Forem</a>
        <a href="https://hashnode.com/@anshumanjadiya1102" target="_blank">🛠 Hashnode</a>
        <a href="https://stackoverflow.com/users/31370142/anshuman-jadiya" target="_blank">🐱‍👤 StackOverflow</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black py-6 text-center border-t border-gray-800">
      <p class="text-gray-400 mb-2">
        <a href="#" class="hover:underline">Terms</a> | 
        <a href="#" class="hover:underline">Privacy</a> | 
        <a href="#" class="hover:underline">Policies</a>
      </p>
      <p class="text-gray-500">
        © 2025 Drive-for-Java • Built with ❤️ by Anshuman Jadiya
      </p>
    </footer>

    <!-- Cursor element -->
    <div class="cursor"></div>

    <!-- JS for cursor follow -->
    <script>
      const cursor = document.querySelector(".cursor");
      document.addEventListener("mousemove", (e) => {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
      });
      lucide.createIcons();
    </script>
  </body>
</html>

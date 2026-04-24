import { Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import avatarImg from '../imports/image-removebg-preview.png';
import profileImg from '../imports/image-6.png';
import heroFullImg from '../imports/hero-new.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        <motion.div 
          className="relative w-full h-full flex items-center justify-center p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src={heroFullImg} 
            alt="Priyanshi Nahar Portfolio" 
            className="w-full h-full object-contain max-w-7xl mx-auto mix-blend-multiply"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">

          {/* Intro Section */}
          <motion.div
            className="mt-32 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Text */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Hi, I'm Priyanshi Nahar</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      I'm a <span className="font-semibold">B.Tech CSE 3rd Year student</span> passionate about <span className="font-semibold">Artificial Intelligence, Machine Learning, and Cybersecurity</span>. With a stellar CGPA of <span className="font-semibold">9.60</span>, I'm dedicated to building intelligent, secure, and scalable solutions.
                    </p>
                    <p>
                      My journey in tech has led me to explore cutting-edge technologies including <span className="font-semibold">Large Language Models, Transformers, and Prompt Engineering</span>. I've completed hands-on industrial training at Torr Lab, where I worked extensively with AI/ML models, OpenCV, and Raspberry Pi.
                    </p>
                    <p>
                      I'm actively seeking opportunities to leverage my strong computer science fundamentals and contribute to innovative projects in AI/ML and cybersecurity domains.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                  <a
                  href="/Resume.pdf"
                  download="Priyanshi_Nahar_Resume.pdf"
                  className="group px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95">
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition" />Download CV</a>
                  <div className="flex gap-3">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium self-center">
                  AI/ML Enthusiast
                  </span>
                  <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium self-center">
                  Cybersecurity
                  </span>
                  </div>
                </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={profileImg}
                      alt="Priyanshi Nahar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Cards Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* About */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-6xl font-bold text-gray-300">01</span>
                <h3 className="text-2xl font-bold mt-4">About</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                B.Tech CSE 3rd Year student with a passion for AI/ML and cybersecurity.
                Seeking opportunities to leverage strong computer science fundamentals in building
                intelligent, secure, and scalable solutions.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm">CGPA: 9.60</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Jaipur, India</span>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-6xl font-bold text-gray-300">02</span>
                <h3 className="text-2xl font-bold mt-4">Experience</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-lg">Torr Lab</h4>
                  <p className="text-sm text-gray-600">Hands-on Industrial Training - AI & ML Lab</p>
                  <p className="text-sm text-gray-500">2024</p>
                </div>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>Advanced Python & Machine Learning</li>
                  <li>OpenCV, Image Processing, NumPy, Pandas</li>
                  <li>Raspberry Pi-based AI/ML models</li>
                </ul>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-6xl font-bold text-gray-300">03</span>
                <h3 className="text-2xl font-bold mt-4">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900">B.Tech - CSE</h4>
                  <p className="text-sm text-gray-600">Rajasthan College of Engineering for Women</p>
                  <p className="text-sm text-gray-500 italic">2023 – 2027 • CGPA: 9.60</p>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 text-sm">Senior Secondary</h4>
                  <p className="text-xs text-gray-600">A's Steward Morris Sr. Sec. School (2023)</p>
                  <p className="text-xs text-gray-500">Percentage: 75.6%</p>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 text-sm">Secondary Education</h4>
                  <p className="text-xs text-gray-600">A's Steward Morris (2021) • 90.2%</p>
                </div>
              </div>
            </motion.div>
            {/* Contact */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-6xl font-bold text-gray-300">04</span>
                <h3 className="text-2xl font-bold mt-4">Contact</h3>
              </div>
              <div className="space-y-4">
                <a href="mailto:priyanshinahar13@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-all hover:translate-x-2">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">priyanshinahar13@gmail.com</span>
                </a>
                <a href="tel:+918619291137" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-all hover:translate-x-2">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">+91 8619291137</span>
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-sm font-medium">Jaipur, India</span>
                </div>
                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <a href="https://linkedin.com/in/priyanshi-nahar-503568274" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-blue-200 shadow-lg">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/Priyanshi-nahar13" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center p-3 bg-gray-900 text-white rounded-xl hover:bg-black transition-colors shadow-gray-200 shadow-lg">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section Numbers */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-[120px] font-bold text-gray-100 leading-none">
              <span className="inline-block mx-4">01</span>
              <span className="inline-block mx-4">02</span>
              <span className="inline-block mx-4">03</span>
              <span className="inline-block mx-4">04</span>
              <span className="inline-block mx-4">05</span>
              <span className="inline-block mx-4">06</span>
            </div>
          </motion.div>
        </div>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 - RCEW AI Chatbot */}
            <motion.div
              className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-3xl p-8 text-gray-800 relative overflow-hidden h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute top-8 right-8 text-8xl font-bold opacity-20 text-indigo-300">1</div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">RCEW AI Chatbot</h3>
                  <p className="text-sm opacity-75 mb-4">Python • Streamlit • NLP</p>
                  <p className="text-sm leading-relaxed">AI-powered chatbot using NLP to automate student queries related to academics and events. Achieved 85-90% accuracy.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs">2026</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs">Live Demo</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 - ERP Inventory System */}
            <motion.div
              className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl p-8 text-gray-800 relative overflow-hidden h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute top-8 right-8 text-8xl font-bold opacity-20 text-emerald-300">2</div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">ERP Inventory System</h3>
                  <p className="text-sm opacity-75 mb-4">Python • Flask • SQLite</p>
                  <p className="text-sm leading-relaxed">Full-stack ERP system for stock tracking, order processing, and production planning with automated data management.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs">2025</span>
                </div>
              </div>
            </motion.div>

            {/* Project 3 - Human Pose Detection */}
            <motion.div
              className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-3xl p-8 text-gray-800 relative overflow-hidden h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute top-8 right-8 text-8xl font-bold opacity-20 text-rose-300">3</div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Human Pose Detection</h3>
                  <p className="text-sm opacity-75 mb-4">Python • OpenCV • MediaPipe</p>
                  <p className="text-sm leading-relaxed">Real-time pose detection system processing 20-30 FPS with 90% accuracy under varying lighting conditions.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs">2025</span>
                </div>
              </div>
            </motion.div>

            {/* Project 4 - AI for Cybersecurity */}
            <motion.div
              className="bg-gradient-to-br from-purple-200 to-pink-100 rounded-3xl p-8 text-gray-800 relative overflow-hidden h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute top-8 right-8 text-8xl font-bold opacity-20 text-purple-300">4</div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">AI for Cybersecurity</h3>
                  <p className="text-sm opacity-75 mb-4">Research • ML • Anomaly Detection</p>
                  <p className="text-sm leading-relaxed">ML-based anomaly detection in network traffic. Published at NCEPST 2025 and selected for STM Journal.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs">2025</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs">Published</span>
                </div>
              </div>
            </motion.div>

            {/* Project 5 - Voice Automation */}
            <motion.div
              className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl p-8 text-gray-800 relative overflow-hidden h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute top-8 right-8 text-8xl font-bold opacity-20 text-amber-300">5</div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Voice-Controlled Automation</h3>
                  <p className="text-sm opacity-75 mb-4">Python • Raspberry Pi • IoT</p>
                  <p className="text-sm leading-relaxed">Voice-enabled IoT system using Raspberry Pi for real-time control of electrical appliances.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs">2025</span>
                </div>
              </div>
            </motion.div>

            {/* Project 6 - Smart Attendance */}
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 text-gray-800 relative overflow-hidden h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute top-8 right-8 text-8xl font-bold opacity-20 text-blue-300">6</div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Smart Attendance System</h3>
                  <p className="text-sm opacity-75 mb-4">Python • OpenCV • Computer Vision</p>
                  <p className="text-sm leading-relaxed">Automated attendance system using face detection and recognition for real-time identification.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs">2024</span>
                </div>
              </div>
            </motion.div>

            {/* Project 7 - News Aggregator */}
            <motion.div
            className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 text-gray-800 relative overflow-hidden h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute top-8 right-8 text-8xl font-bold opacity-20 text-purple-300">7</div>

            <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3">News Aggregator</h3>
            <p className="text-sm opacity-75 mb-4">Python • NewsAPI • JSON</p>
            <p className="text-sm leading-relaxed">
            Built a dynamic news application that fetches real-time articles using NewsAPI. 
            Implemented keyword-based search, JSON parsing, and structured content display 
            for a smooth user experience.
          </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white rounded-full text-xs">2024</span>
          </div>
        </div>
        </motion.div>

        {/* Project 8- Breast Cancer Prediction */}
        <motion.div
          className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-8 text-gray-800 relative overflow-hidden h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
        <div className="absolute top-8 right-8 text-8xl font-bold opacity-20 text-pink-300">5</div>

        <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-3">Breast Cancer Prediction</h3>
          <p className="text-sm opacity-75 mb-4">
          Python • Pandas • NumPy • Scikit-learn • Matplotlib
        </p>
        <p className="text-sm leading-relaxed">
        Developed a supervised machine learning model to predict breast cancer using 
        Ridge, Lasso, and KNN classifiers. Performed data preprocessing, feature selection, 
        and model evaluation, achieving strong prediction accuracy through comparative analysis 
        and visualization.
      </p>
    </div>
      <div className="flex gap-2">
      <span className="px-3 py-1 bg-white rounded-full text-xs">2024</span>
    </div>
  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-start gap-4 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-8xl font-bold text-gray-200">05</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-4">Skills & Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm">C++</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">SQL</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-lg mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm">OpenCV</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Scikit-learn</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Pandas</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">NumPy</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Matplotlib</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Streamlit</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-bold text-lg mb-4">AI/ML & NLP</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm">LLMs</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Transformers</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Prompt Eng.</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">NLP</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-bold text-lg mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">GitHub</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">VS Code</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Jupyter Notebook</span>
              </div>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl p-6 lg:col-span-4 mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="font-bold text-lg mb-4">Core Concepts</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm">Data Structures & Algorithms</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Object-Oriented Programming (OOP)</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Computer Networks</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Operating Systems</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">DBMS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-start gap-4 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-8xl font-bold text-gray-200">06</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-4">Certifications</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-indigo-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold">
                C
              </div>
              <h3 className="font-bold mb-2">Data Science with Python</h3>
              <p className="text-sm text-gray-600">Cisco Networking Academy</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold">
                IIT
              </div>
              <h3 className="font-bold mb-2">National Entrepreneurship Challenge</h3>
              <p className="text-sm text-gray-600">IIT Bombay</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-green-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold">
                I
              </div>
              <h3 className="font-bold mb-2">Pointers in C Programming</h3>
              <p className="text-sm text-gray-600">Infosys Springboard</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-sky-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold">
                MS
              </div>
              <h3 className="font-bold mb-2">Career Essentials in Data Analysis</h3>
              <p className="text-sm text-gray-600">Microsoft</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-orange-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold">
                AI
              </div>
              <h3 className="font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-gray-600">Industrial Training</p>
            </motion.div>
          </div>
          
            {/* Extra-Curricular Activities Section */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <h3 className="text-3xl font-bold mb-10 text-center text-gray-800 tracking-tight">
            Extra-Curricular Activities
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
            {/* Activity 1 */}
            <motion.div
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-md"
            whileHover={{ scale: 1.03 }}
            >
            <h4 className="font-semibold text-lg mb-2">Website Management Team, RCEW</h4>
            <p className="text-sm text-gray-600 mb-2">2025 – Present</p>
            <p className="text-sm text-gray-700">
            Managing and updating the college website, ensuring content accuracy,
            smooth functionality, and timely updates.
            </p>
            </motion.div>

            {/* Activity 2 */}
            <motion.div
            className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl shadow-md"
            whileHover={{ scale: 1.03 }}
            >
            <h4 className="font-semibold text-lg mb-2">Public Relations Head, E-Cell</h4>
            <p className="text-sm text-gray-600 mb-2">2023 – 2024</p>
            <p className="text-sm text-gray-700">
            Led event promotions and social media outreach, collaborating on product-based
            initiatives including a video editing application.
            </p>
            </motion.div>
            
            {/* Activity 3 */}
            <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md"
            whileHover={{ scale: 1.03 }}
          >
      <h4 className="font-semibold text-lg mb-2">Student Member, RCEW Council</h4>
      <p className="text-sm text-gray-600 mb-2">2023 – Present</p>
      <p className="text-sm text-gray-700">
        Managed large-scale events like Rhythm Rush and hackathons, handling logistics,
        sponsorship coordination, and digital content creation.
      </p>
    </motion.div>

    {/* Activity 4 */}
    <motion.div
      className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-md"
      whileHover={{ scale: 1.03 }}
    >
      <h4 className="font-semibold text-lg mb-2">
        National Entrepreneurship Challenge – IIT Bombay
      </h4>
      <p className="text-sm text-gray-600 mb-2">2023</p>
      <p className="text-sm text-gray-700">
        Ranked among the Top 50 nationally for innovative startup ideas and execution,
        showcasing entrepreneurial thinking and problem-solving skills.
      </p>
    </motion.div>

  </div>
</motion.div>

          {/* Strengths Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 tracking-tight">Personal Strengths</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Problem Solving', 'Analytical Thinking', 'Adaptability', 'Learning Agility', 'Collaboration', 'Teamwork', 'Communication', 'Time Management'].map((strength, index) => (
                <motion.span
                  key={strength}
                  className="px-6 py-3 bg-white shadow-md rounded-2xl text-gray-700 font-medium border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-600 mb-8">
              Interested in AI/ML, Cybersecurity, and emerging technologies? Let's connect!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:priyanshinahar13@gmail.com"
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <a
                href="https://github.com/Priyanshi-nahar13"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-black rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p>© 2025 Priyanshi Nahar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
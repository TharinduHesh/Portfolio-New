import { motion } from 'framer-motion';
import { FaShieldAlt, FaNetworkWired, FaBug } from 'react-icons/fa';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9,
      rotateX: 45
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const headingVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 1
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background with Gradient Transition */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.25) 0%, rgba(2, 6, 23, 1) 50%)',
            'radial-gradient(circle at 80% 50%, rgba(14, 165, 233, 0.25) 0%, rgba(2, 6, 23, 1) 50%)',
            'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.25) 0%, rgba(2, 6, 23, 1) 50%)',
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.25) 0%, rgba(2, 6, 23, 1) 50%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Animated Grid Lines */}
        <motion.div 
          className="absolute inset-0 bg-grid-pattern"
          animate={{
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/40"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity },
            opacity: { duration: 5, repeat: Infinity }
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-secondary/40 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity },
            opacity: { duration: 6, repeat: Infinity }
          }}
        />
        
        {/* Floating Orbs with Enhanced Animation */}
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/30 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: '100%'
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="section-container z-10 text-center max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center">
          {/* Main Heading */}
          <motion.div 
            variants={headingVariants} 
            className="mb-6"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-center"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.span 
                className="text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-primary bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Secure development for today's digital world
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Name with Special Effect */}
          <motion.div 
            variants={itemVariants} 
            className="mb-10 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-xl"></div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-gray-200 relative">
              THARINDU H RANASINGHE
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary"></div>
              <p className="text-sm text-primary font-medium tracking-widest"></p>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            <motion.div 
              className="group px-6 py-4 bg-dark/40 backdrop-blur-md border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.2)" }}
            >
              <div className="flex items-center justify-center gap-3">
                <FaShieldAlt className="text-primary text-xl group-hover:scale-110 transition-transform" />
                <span className="text-gray-200 font-semibold">UI/UX Designing</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="group px-6 py-4 bg-dark/40 backdrop-blur-md border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.2)" }}
            >
              <div className="flex items-center justify-center gap-3">
                <FaNetworkWired className="text-primary text-xl group-hover:scale-110 transition-transform" />
                <span className="text-gray-200 font-semibold">Creative Developer</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="group px-6 py-4 bg-dark/40 backdrop-blur-md border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.2)" }}
            >
              <div className="flex items-center justify-center gap-3">
                <FaBug className="text-primary text-xl group-hover:scale-110 transition-transform" />
                <span className="text-gray-200 font-semibold">Cyber Security</span>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-16">
            <motion.a
              href="#contact"
              className="group relative px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-primary/30"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(14, 165, 233, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              href="#projects"
              className="group px-10 py-4 bg-transparent border-2 border-primary/70 text-primary font-bold rounded-xl hover:bg-primary/10 transition-all duration-300 shadow-lg shadow-primary/10"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#0ea5e9',
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Explore Projects
                <FaShieldAlt className="group-hover:rotate-12 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full"
            />
          </div>
          <span className="text-xs text-gray-500 tracking-widest">SCROLL</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-3"
            >
              <div className="relative">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <div className="absolute inset-0 h-5 w-5 bg-yellow-500 rounded-full blur-sm animate-pulse"></div>
              </div>
              <span className="font-semibold text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                Site profissional que impressiona
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight"
            >
              Sites que{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Convertem
              </span>{" "}
              e fazem seu{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Negócio Crescer!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
            >
              Criamos sites profissionais com{" "}
              <span className="font-semibold text-gray-900">
                layout premium exclusivo
              </span>
              , otimizados para conversão e focados no crescimento do seu
              negócio.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto lg:mx-0"
            >
              {[
                { text: "Design Premium Exclusivo", icon: "🎨" },
                { text: "Otimizado para SEO", icon: "🚀" },
                { text: "Responsivo para Mobile", icon: "📱" },
                { text: "Carregamento Ultra-Rápido", icon: "⚡" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/30 hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-700 font-medium text-sm lg:text-base">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl flex items-center justify-center space-x-3 shadow-2xl overflow-hidden group"
              >
                <span className="relative z-10">Começar Agora</span>
                <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white/80 backdrop-blur-sm text-gray-900 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl border-2 border-white/30 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                Ver Portfólio
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-8 lg:space-x-12 pt-8 lg:pt-12"
            >
              {[
                { number: "100+", label: "Sites Criados" },
                { number: "99%", label: "Satisfação" },
                { number: "24h", label: "Suporte" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/30"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 right-4 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"></div>
                  </div>

                  <div className="relative text-center z-10">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-6xl lg:text-7xl mb-6"
                    >
                      🚀
                    </motion.div>
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-800 mb-3">
                      Seu Site Aqui
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Profissional e Moderno
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white p-4 rounded-2xl shadow-xl"
              >
                <CheckCircle className="h-6 w-6 lg:h-8 lg:w-8" />
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white p-4 rounded-2xl shadow-xl"
              >
                <Star className="h-6 w-6 lg:h-8 lg:w-8 fill-current" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/2 -left-8 bg-gradient-to-r from-pink-400 to-red-500 text-white p-3 rounded-full shadow-lg"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-8 -right-8 bg-gradient-to-r from-purple-400 to-pink-500 text-white p-3 rounded-full shadow-lg"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

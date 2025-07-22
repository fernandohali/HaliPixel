import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-primary-600"
            >
              <Star className="h-5 w-5 fill-current" />
              <span className="font-medium">
                Site profissional que impressiona
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Sites que <span className="text-primary-600">Convertem</span> e
              fazem seu{" "}
              <span className="text-secondary-600">Negócio Crescer!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Criamos sites profissionais com layout premium exclusivo,
              otimizados para conversão e focados no crescimento do seu negócio.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                "Design Premium Exclusivo",
                "Otimizado para SEO",
                "Responsivo para Mobile",
                "Carregamento Ultra-Rápido",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Começar Agora</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors font-semibold text-lg">
                Ver Portfólio
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100+</div>
                <div className="text-sm text-gray-600">Sites Criados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">99%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24h</div>
                <div className="text-sm text-gray-600">Suporte</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Seu Site Aqui
                  </h3>
                  <p className="text-gray-600 mt-2">Profissional e Moderno</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
            >
              <CheckCircle className="h-6 w-6" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-4 left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
            >
              <Star className="h-6 w-6 fill-current" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

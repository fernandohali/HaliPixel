import { motion } from "framer-motion";
import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Foco em Conversão",
      description:
        "Cada elemento é pensado estrategicamente para converter visitantes em clientes.",
    },
    {
      icon: Users,
      title: "Experiência do Usuário",
      description:
        "Design intuitivo e navegação fluida que mantém seus usuários engajados.",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description:
        "Layouts exclusivos e profissionais que destacam sua marca no mercado.",
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description:
        "Sites rápidos e otimizados para SEO, garantindo melhor posicionamento no Google.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Por que escolher a{" "}
                <span className="text-primary-600">HaliPixel?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos especialistas em criar sites que não apenas impressionam
                visualmente, mas que realmente geram resultados para o seu
                negócio. Nossa abordagem combina design premium com estratégias
                de conversão comprovadas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {/* Mock Website Previews */}
                <div className="bg-white rounded-lg shadow-md p-4 space-y-3">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  <div className="h-16 bg-gradient-to-r from-primary-200 to-secondary-200 rounded"></div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4 space-y-3">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                  <div className="h-16 bg-gradient-to-r from-secondary-200 to-primary-200 rounded"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4 space-y-3">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-16 bg-gradient-to-r from-green-200 to-blue-200 rounded"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4 space-y-3">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  <div className="h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-xs text-gray-600">Taxa de Aprovação</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24h</div>
                <div className="text-xs text-gray-600">Tempo de Resposta</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

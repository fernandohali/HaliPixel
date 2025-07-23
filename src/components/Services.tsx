import { motion } from "framer-motion";
import { Globe, Zap, Building, ShoppingCart, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Landing Page",
      subtitle: "Página única para campanhas patrocinadas",
      description:
        "Páginas focadas em conversão para suas campanhas de marketing digital. Design otimizado para transformar visitantes em leads qualificados.",
      features: [
        "Foco em conversão",
        "Carregamento rápido",
        "Otimizado para anúncios",
        "A/B Testing",
      ],
      price: "A partir de R$ 897",
      popular: false,
    },
    {
      icon: Zap,
      title: "Site One Page",
      subtitle: "Site navegável em uma página única",
      description:
        "Site completo em uma única página com menu funcional. Ideal para negócios que querem apresentar seus serviços de forma direta e objetiva.",
      features: [
        "Menu funcional",
        "Design responsivo",
        "SEO otimizado",
        "Formulário de contato",
      ],
      price: "A partir de R$ 1.297",
      popular: true,
    },
    {
      icon: Building,
      title: "Site Corporativo",
      subtitle: "Site profissional multi-páginas",
      description:
        "Site institucional completo com múltiplas páginas. Perfeito para empresas que precisam de uma presença digital robusta e profissional.",
      features: [
        "Múltiplas páginas",
        "Área administrativa",
        "Blog integrado",
        "Análise de tráfego",
      ],
      price: "A partir de R$ 1.897",
      popular: false,
    },
    {
      icon: ShoppingCart,
      title: "Loja Virtual",
      subtitle: "E-commerce completo para vendas online",
      description:
        "Loja virtual completa com sistema de pagamento integrado. Solução completa para quem quer vender produtos ou serviços online.",
      features: [
        "Checkout integrado",
        "Gestão de estoque",
        "Múltiplas formas de pagamento",
        "Painel administrativo",
      ],
      price: "A partir de R$ 2.497",
      popular: false,
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        {/* Floating Shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-semibold">Nossos Serviços</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Soluções{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Completas
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Oferecemos soluções completas em desenvolvimento web, desde landing
            pages otimizadas até e-commerces robustos. Escolha o serviço ideal
            para o seu negócio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-white/20 ${
                service.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-bl-2xl text-xs sm:text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-6 ${
                    service.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600"
                  }`}
                >
                  <service.icon className="h-8 w-8 lg:h-10 lg:w-10" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-4 text-sm lg:text-base">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: featureIndex * 0.1,
                        }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm lg:text-base">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="pt-6 border-t border-gray-100">
                    <div
                      className={`text-2xl lg:text-3xl font-bold mb-4 ${
                        service.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                          : "text-gray-900"
                      }`}
                    >
                      {service.price}
                    </div>

                    <motion.a
                      href={`https://wa.me/5573991538093?text=Olá! Tenho interesse no serviço de ${service.title} (${service.price}). Podemos conversar sobre os detalhes?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 lg:py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base ${
                        service.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                          : "bg-gradient-to-r from-gray-100 to-blue-50 text-gray-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white"
                      }`}
                    >
                      <span>Solicitar Orçamento</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 lg:mb-6">
                Não encontrou o que procura?
              </h3>
              <p className="text-xl lg:text-2xl mb-6 lg:mb-8 text-blue-100 font-light">
                Criamos soluções personalizadas para atender às necessidades
                específicas do seu negócio.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 lg:px-10 py-3 lg:py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors text-base lg:text-lg"
              >
                Falar com Especialista
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

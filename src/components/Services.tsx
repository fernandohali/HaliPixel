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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-primary-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento web, desde landing
            pages otimizadas até e-commerces robustos. Escolha o serviço ideal
            para o seu negócio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                service.popular ? "ring-2 ring-primary-600 scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Mais Popular
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    service.popular
                      ? "bg-primary-600 text-white"
                      : "bg-primary-100 text-primary-600"
                  }`}
                >
                  <service.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-600 font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-6 border-t border-gray-100">
                    <div
                      className={`text-2xl font-bold mb-4 ${
                        service.popular ? "text-primary-600" : "text-gray-900"
                      }`}
                    >
                      {service.price}
                    </div>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:transform group-hover:scale-105 ${
                        service.popular
                          ? "bg-primary-600 text-white hover:bg-primary-700"
                          : "bg-gray-100 text-gray-900 hover:bg-primary-600 hover:text-white"
                      }`}
                    >
                      <span>Solicitar Orçamento</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Criamos soluções personalizadas para atender às necessidades
              específicas do seu negócio.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Falar com Especialista
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

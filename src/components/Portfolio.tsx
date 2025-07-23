import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce de Moda",
      category: "Loja Virtual",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Loja virtual completa com design moderno e checkout otimizado",
      tags: ["E-commerce", "Responsivo", "SEO"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Landing Page Médica",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Landing page focada em conversão para clínica médica",
      tags: ["Conversão", "Saúde", "Mobile"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Site Corporativo Tech",
      category: "Site Corporativo",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site institucional para empresa de tecnologia",
      tags: ["Corporativo", "Tech", "Moderno"],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "One Page Restaurante",
      category: "Site One Page",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site one page elegante para restaurante gourmet",
      tags: ["Gastronomia", "Elegante", "Menu"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Plataforma de Cursos",
      category: "E-learning",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Plataforma completa para cursos online",
      tags: ["Educação", "Plataforma", "UX"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Landing Page Imobiliária",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Landing page para captação de leads imobiliários",
      tags: ["Imóveis", "Leads", "CRM"],
      color: "from-teal-500 to-blue-500",
    },
  ];

  const categories = [
    "Todos",
    "Landing Page",
    "Site One Page",
    "Site Corporativo",
    "Loja Virtual",
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Nosso <span className="text-primary-600">Portfólio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com muito carinho e
            dedicação. Cada site é único e criado especialmente para atender às
            necessidades de nossos clientes.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base ${
                index === 0
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-600"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 lg:space-x-4">
                  <button
                    title="Visualizar projeto"
                    className="bg-white text-gray-900 p-2 lg:p-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Eye className="h-4 w-4 lg:h-5 lg:w-5" />
                  </button>
                  <button
                    title="Abrir projeto"
                    className="bg-primary-600 text-white p-2 lg:p-3 rounded-full hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 lg:h-5 lg:w-5" />
                  </button>
                </div>

                {/* Category Badge */}
                <div
                  className={`absolute top-2 left-2 lg:top-4 lg:left-4 bg-gradient-to-r ${project.color} text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium`}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 lg:mb-4 leading-relaxed text-sm lg:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 lg:px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
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
          className="text-center mt-12 lg:mt-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
            Gostou do que viu?
          </h3>
          <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8">
            Vamos criar algo incrível para o seu negócio também!
          </p>
          <button className="bg-primary-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-primary-700 transition-colors font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl">
            Iniciar Meu Projeto
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

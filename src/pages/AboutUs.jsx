import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Target } from 'lucide-react';
const AboutUs = () => {
  const stats = [{
    icon: Award,
    value: '15+',
    label: 'Años de Experiencia'
  }, {
    icon: Users,
    value: '500+',
    label: 'Clientes Satisfechos'
  }, {
    icon: TrendingUp,
    value: '1000+',
    label: 'Campañas Exitosas'
  }, {
    icon: Target,
    value: '50+',
    label: 'Ubicaciones Estratégicas'
  }];
  const timeline = [{
    year: '2008',
    title: 'Fundación',
    description: 'Inicio de operaciones en Durango con la primera estructura espectacular'
  }, {
    year: '2012',
    title: 'Expansión',
    description: 'Alcanzamos 20 ubicaciones estratégicas en la ciudad'
  }, {
    year: '2016',
    title: 'Digitalización',
    description: 'Incorporación de pantallas LED de última generación'
  }, {
    year: '2020',
    title: 'Liderazgo',
    description: 'Nos convertimos en la empresa líder de OOH en Durango'
  }, {
    year: '2024',
    title: 'Innovación',
    description: 'Tecnología 4K y soluciones programáticas para nuestros clientes'
  }];
  return <>
      <Helmet>
        <title>Nosotros - The Good Mark | Líderes en Publicidad Exterior</title>
        <meta name="description" content="Conoce la historia de The Good Mark, líder en publicidad exterior en Durango con más de 15 años transformando marcas." />
      </Helmet>

      <div className="pt-20">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="The Good Mark equipo" src="https://images.unsplash.com/photo-1635185481431-661b09594e6c" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#01257D]/90 to-[#165e9d]/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-5xl md:text-6xl font-bold text-white mb-4" style={{
            fontFamily: 'Ubuntu, sans-serif'
          }}>
              Nosotros
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-xl text-gray-200 max-w-3xl mx-auto" style={{
            fontFamily: 'Poppins, sans-serif'
          }}>
              Más de 15 años transformando marcas a través de la publicidad exterior
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-4xl font-bold text-[#01257D] mb-6" style={{
                fontFamily: 'Ubuntu, sans-serif'
              }}>
                  Nuestra Historia
                </h2>
                <p className="text-lg text-gray-700 mb-4" style={{
                fontFamily: 'Poppins, sans-serif'
              }}>
                  The Good Mark nació en 2008 con una visión clara: revolucionar la publicidad exterior en Durango. Lo que comenzó como una pequeña empresa con un espectacular, hoy es la red de publicidad OOH más grande y tecnológicamente avanzada de la región.
                </p>
                <p className="text-lg text-gray-700 mb-4" style={{
                fontFamily: 'Poppins, sans-serif'
              }}>
                  A lo largo de los años, hemos evolucionado constantemente, incorporando las últimas tecnologías y mejores prácticas de la industria para ofrecer soluciones publicitarias que realmente generan resultados.
                </p>
                <p className="text-lg text-gray-700" style={{
                fontFamily: 'Poppins, sans-serif'
              }}>
                  Nuestro compromiso es claro: ayudar a las marcas a conectar con su audiencia en los momentos y lugares más impactantes de la ciudad.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Historia The Good Mark" src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="bg-gradient-to-br from-[#01257D] to-[#165e9d] rounded-xl p-6 text-center text-white shadow-xl">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#00FFFF]" />
                  <div className="text-4xl font-bold mb-2" style={{
                fontFamily: 'Ubuntu, sans-serif'
              }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-200" style={{
                fontFamily: 'Poppins, sans-serif'
              }}>
                    {stat.label}
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#01257D] mb-4" style={{
              fontFamily: 'Ubuntu, sans-serif'
            }}>
                Nuestra Trayectoria
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{
              fontFamily: 'Poppins, sans-serif'
            }}>
                Un camino de crecimiento constante e innovación
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00FFFF]"></div>
              
              {timeline.map((event, index) => <motion.div key={event.year} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'} md:w-1/2`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                    <div className="absolute top-8 -ml-4 md:ml-0 left-1/2 md:left-auto md:right-auto transform -translate-x-1/2 w-8 h-8 bg-[#00FFFF] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#01257D] rounded-full"></div>
                    </div>
                    
                    <div className="inline-block bg-[#01257D] text-white px-4 py-2 rounded-full font-bold mb-3" style={{
                  fontFamily: 'Ubuntu, sans-serif'
                }}>
                      {event.year}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#01257D] mb-2" style={{
                  fontFamily: 'Ubuntu, sans-serif'
                }}>
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600" style={{
                  fontFamily: 'Poppins, sans-serif'
                }}>
                      {event.description}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#01257D] to-[#165e9d] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl font-bold mb-6" style={{
              fontFamily: 'Ubuntu, sans-serif'
            }}>
                Nuestra Misión
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12" style={{
              fontFamily: 'Poppins, sans-serif'
            }}>Conectar marcas con sus audiencias mediante soluciones de publicidad exterior innovadoras, estratégicas y de alto impacto, generando resultados medibles y construyendo relaciones comerciales duraderas.
            </p>

              <h2 className="text-4xl font-bold mb-6" style={{
              fontFamily: 'Ubuntu, sans-serif'
            }}>
                Nuestra Visión
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto" style={{
              fontFamily: 'Poppins, sans-serif'
            }}>
                Ser la empresa líder en publicidad exterior en el norte de México, reconocida por nuestra excelencia, innovación tecnológica y el impacto positivo que generamos para nuestros clientes y comunidades.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default AboutUs;
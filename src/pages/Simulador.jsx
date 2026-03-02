import { Button } from '@/components/ui/button';
import cotizadorAsset from '@/img/Cotizador.webp';

const simuladorUrl = import.meta.env.VITE_SIMULADOR_URL || '/cotizar/ubicacion';
const cotizadorImg = import.meta.env.VITE_SIMULADOR_IMAGE || cotizadorAsset;

const Simulador = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative text-white py-24 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-br from-[#0a1f4d] via-[#0d3b7a] to-[#0f65a0] min-h-[70vh] md:min-h-[80vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/70 to-[#165e9d]/60" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <h1 className="font-ubuntu font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                        Visualiza tu campaña <span className="text-cyan">antes de contratar</span>
                    </h1>
                    <p className="font-poppins text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
                        Explora diferentes formatos, ubicaciones y duraciones para entender el impacto real de tu publicidad exterior, sin compromisos.
                    </p>
                    <Button
                        asChild
                        className="bg-[#00FFFF] text-[#01257D] hover:bg-[#00FFFF]/90 text-lg px-8 py-6 rounded-full font-semibold transition-all transform hover:scale-105"
                    >
                        <a href={simuladorUrl} target="_blank" rel="noopener noreferrer">
                            Empieza ahora
                        </a>
                    </Button>
                </div>

                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Information Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-ubuntu font-extrabold text-3xl md:text-4xl text-slate-900 mb-6">
                                ¿Qué es un Simulador de Impacto?
                            </h2>
                            <p className="font-poppins text-lg text-gray-700 mb-8 leading-relaxed">
                                El Simulador de Impacto es una herramienta interactiva que te permite jugar con diferentes escenarios publicitarios para visualizar opciones y tomar mejores decisiones antes de hacerlas con un asesor.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <span className="font-poppins font-semibold text-slate-900">Es</span>
                                        <span className="font-poppins text-gray-700"> una cotización final</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <span className="font-poppins font-semibold text-slate-900">Es una herramienta</span>
                                        <span className="font-poppins text-gray-700"> visual de referencia</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <span className="font-poppins font-semibold text-slate-900">Para continuar,</span>
                                        <span className="font-poppins text-gray-700"> será necesario ingresar algunos datos.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl shadow-2xl overflow-hidden">
                                <img src={cotizadorImg} alt="Vista previa del cotizador" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional CTA Section */}
            <section className="bg-white py-12 px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="font-ubuntu text-2xl text-slate-900 mb-2">Listo para probar el simulador</h3>
                        <p className="font-poppins text-gray-700">Empieza a comparar ubicaciones y formatos en menos de un minuto.</p>
                    </div>
                    <Button
                        asChild
                        className="font-poppins bg-[#01257D] hover:bg-[#0d3b7a] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md border-0"
                    >
                        <a href={simuladorUrl} target="_blank" rel="noopener noreferrer">
                            Ir al simulador
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Simulador;

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_INTERVAL = 3000;
const MAX_HOVER_PAUSE = 10000;

const cases = [
  {
    title: "Campaña Automotriz Premium",
    brand: "Marca Automotriz",
    description:
      "Incremento del 45% en visitas a concesionarios durante la campaña, superando todas las expectativas del cliente.",
    metrics: { reach: "2.5M", engagement: "+45%", duration: "3 meses" },
    img: "https://images.unsplash.com/photo-1697747264193-3e43cb4c095a",
  },
  {
    title: "Lanzamiento Producto Retail",
    brand: "Retail Nacional",
    description:
      "Campaña multi-formato que generó 80% de recordación de marca en el segmento objetivo.",
    metrics: { reach: "1.8M", engagement: "+80%", duration: "2 meses" },
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Campaña Servicios Financieros",
    brand: "Banco Regional",
    description:
      "Posicionamiento en top-of-mind con presencia estratégica que consolidó la confianza del consumidor.",
    metrics: { reach: "3.2M", engagement: "+60%", duration: "6 meses" },
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
];

const SuccessCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const hoverStartRef = useRef(null);
  const intervalRef = useRef(null);
  const maxHoverTimerRef = useRef(null);

  const goTo = useCallback((index, dir = 1) => {
    setDirection(dir);
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => {
    goTo((currentIndex + 1) % cases.length, 1);
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + cases.length) % cases.length, -1);
  }, [currentIndex, goTo]);

  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cases.length);
      setDirection(1);
    }, AUTOPLAY_INTERVAL);
  }, []);

  const stopAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  // Start autoplay on mount
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Pause/resume on isPaused change
  useEffect(() => {
    if (isPaused) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }, [isPaused, startAutoplay, stopAutoplay]);

  const handleMouseEnter = () => {
    hoverStartRef.current = Date.now();
    setIsPaused(true);

    // Force resume after MAX_HOVER_PAUSE
    maxHoverTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, MAX_HOVER_PAUSE);
  };

  const handleMouseLeave = () => {
    clearTimeout(maxHoverTimerRef.current);
    setIsPaused(false);
  };

  // Touch: pause briefly on swipe area, then continue
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    setIsPaused(false);
  };

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const current = cases[currentIndex];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-[#01257D] to-[#165e9d]">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Casos de Éxito
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto">
            Resultados comprobados que impulsan tu negocio
          </p>
        </motion.div>

        {/* CAROUSEL WRAPPER with outside arrows */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="flex-shrink-0 bg-white/15 hover:bg-white/30 border border-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm"
          >
            <ChevronLeft size={22} />
          </button>

          {/* SLIDE */}
          <div
            className="flex-1 min-w-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">

                  {/* IMAGE */}
                  <div className="relative h-48 sm:h-60 md:h-full min-h-[200px]">
                    <img
                      className="w-full h-full object-cover"
                      alt={current.title}
                      src={current.img}
                    />
                    {/* Gradient overlay on mobile for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-7 md:p-10 flex flex-col justify-center">

                    <div className="inline-block self-start bg-[#01257D]/10 text-[#01257D] px-3 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wide">
                      {current.brand}
                    </div>

                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#01257D] mb-3 leading-tight">
                      {current.title}
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
                      {current.description}
                    </p>

                    {/* METRICS */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                      {[
                        { label: "Alcance", value: current.metrics.reach },
                        { label: "Engagement", value: current.metrics.engagement },
                        { label: "Duración", value: current.metrics.duration },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="bg-gray-50 border border-gray-100 rounded-xl py-3 px-1"
                        >
                          <div className="text-base sm:text-xl font-bold text-[#165e9d] leading-none mb-1">
                            {item.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            aria-label="Siguiente"
            className="flex-shrink-0 bg-white/15 hover:bg-white/30 border border-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* DOTS + PROGRESS */}
        <div className="flex flex-col items-center mt-6 gap-3">
          <div className="flex gap-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index, index > currentIndex ? 1 : -1)}
                aria-label={`Ir al caso ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/40 w-2 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>

          {/* Progress bar: resets each slide, pauses with autoplay */}
          <div className="w-24 h-0.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              key={`${currentIndex}-${isPaused}`}
              className="h-full bg-white/70 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? undefined : "100%" }}
              transition={
                isPaused
                  ? { duration: 0 }
                  : { duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessCarousel;
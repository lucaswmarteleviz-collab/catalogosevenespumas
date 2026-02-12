const logoImg = '/logo-seven-espumas.png';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-slate-800/50 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <img
            src={logoImg}
            alt="Seven Espumas"
            className="h-16 sm:h-20 md:h-24 w-auto mx-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
          <span className="text-slate-300 text-xs sm:text-sm font-medium">
            Fabricação própria com qualidade certificada
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight animate-slide-up">
          Sua espuma,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
            na sua medida.
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in px-4">
          Espumas de alta qualidade cortadas sob medida para seu projeto.
          Simule o preço agora mesmo e receba pelo WhatsApp.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4">
          <a
            href="#simulador"
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-calculator"></i>
            Simular Preço Agora
          </a>
          <a
            href="#precos"
            className="w-full sm:w-auto glass hover:bg-white/10 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-table-cells"></i>
            Ver Tabela de Preços
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-lg mx-auto px-4">
          {[
            { value: '4', label: 'Densidades' },
            { value: 'Sob', label: 'Medida' },
            { value: '100%', label: 'Fábrica' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-yellow-500">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#simulador" className="text-slate-500 hover:text-yellow-500 transition-colors">
          <i className="fa-solid fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
}

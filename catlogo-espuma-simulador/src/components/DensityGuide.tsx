import { DENSITIES } from '../data/constants';

const FIRMNESS_LEVELS = [
  { density: 'D23', level: 1, bar: 'w-1/4' },
  { density: 'D28', level: 2, bar: 'w-2/4' },
  { density: 'D33', level: 3, bar: 'w-3/4' },
  { density: 'D40', level: 4, bar: 'w-full' },
];

export function DensityGuide() {
  return (
    <section id="guia" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-4">
            <i className="fa-solid fa-book-open text-yellow-500 text-xs"></i>
            <span className="text-yellow-500 text-xs font-semibold uppercase tracking-wider">
              Guia de Escolha
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Qual densidade{' '}
            <span className="text-yellow-500">escolher?</span>
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Cada densidade tem uma aplicação ideal. Confira nosso guia rápido
            para fazer a melhor escolha.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {DENSITIES.map((d) => {
            const firmness = FIRMNESS_LEVELS.find((f) => f.density === d.id)!;
            return (
              <div
                key={d.id}
                className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02]"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${d.color} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <i className={`fa-solid ${d.icon} text-white text-xl sm:text-2xl`}></i>
                </div>

                {/* Title */}
                <h4 className="text-white font-bold text-xl mb-1">
                  {d.name}
                </h4>
                <span className={`${d.colorText} text-sm font-semibold`}>
                  {d.label}
                </span>

                {/* Description */}
                <p className="text-slate-400 text-sm mt-3 mb-4 leading-relaxed">
                  {d.description}
                </p>

                {/* Firmness Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-500">Firmeza</span>
                    <span className={`${d.colorText} font-semibold`}>
                      {firmness.level}/4
                    </span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${d.color} rounded-full transition-all duration-500 ${firmness.bar}`}
                    ></div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="space-y-2">
                  {d.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <i className={`fa-solid fa-check ${d.colorText} text-xs`}></i>
                      {useCase}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#simulador"
                  className={`mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl ${d.colorBg} ${d.colorBorder} border text-sm font-semibold ${d.colorText} hover:brightness-125 transition-all`}
                >
                  <i className="fa-solid fa-calculator text-xs"></i>
                  Simular com {d.name}
                </a>
              </div>
            );
          })}
        </div>

        {/* Quick Comparison */}
        <div className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 mt-8 sm:mt-10">
          <h4 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">
            <i className="fa-solid fa-lightbulb text-yellow-500 mr-2"></i>
            Resumo Rápido
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                question: 'Encosto de sofá ou almofada?',
                answer: 'D23 (Macia)',
                icon: 'fa-couch',
                color: 'text-green-400',
              },
              {
                question: 'Colchão de solteiro ou pallet?',
                answer: 'D28 (Média)',
                icon: 'fa-bed',
                color: 'text-blue-400',
              },
              {
                question: 'Assento de sofá ou colchão casal?',
                answer: 'D33 (Firme)',
                icon: 'fa-chair',
                color: 'text-yellow-400',
              },
              {
                question: 'Uso intenso ou hospitalar?',
                answer: 'D40 (Alta Performance)',
                icon: 'fa-hospital',
                color: 'text-red-400',
              },
            ].map((item) => (
              <div
                key={item.question}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <i className={`fa-solid ${item.icon} ${item.color} text-base sm:text-lg`}></i>
                </div>
                <div>
                  <p className="text-slate-300 text-sm">{item.question}</p>
                  <p className={`${item.color} font-bold text-sm sm:text-base`}>
                    → {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

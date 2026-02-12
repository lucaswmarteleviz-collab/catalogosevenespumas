import { DENSITIES, MATTRESS_SIZES, MATTRESS_HEIGHTS, SHEET_SIZE, formatCurrency, calculatePrice } from '../data/constants';
import { useState } from 'react';

export function Mattresses() {
  const [selectedDensity, setSelectedDensity] = useState('D33');
  const density = DENSITIES.find((d) => d.id === selectedDensity)!;

  return (
    <section id="colchoes" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-4">
            <i className="fa-solid fa-bed text-yellow-500 text-xs"></i>
            <span className="text-yellow-500 text-xs font-semibold uppercase tracking-wider">
              Colchões & Lâminas
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Tamanhos <span className="text-yellow-500">prontos</span> para cotação
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Veja os preços para os tamanhos padrão de colchão e lâminas inteiras.
          </p>
        </div>

        {/* Density Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {DENSITIES.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDensity(d.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                selectedDensity === d.id
                  ? `bg-gradient-to-r ${d.color} text-white shadow-lg`
                  : 'glass text-slate-300 hover:bg-white/10'
              }`}
            >
              <i className={`fa-solid ${d.icon} mr-2`}></i>
              {d.name}
            </button>
          ))}
        </div>

        {/* Mattress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {MATTRESS_SIZES.map((size) => (
            <div
              key={size.name}
              className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${density.color} flex items-center justify-center`}
                >
                  <i className="fa-solid fa-bed text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg sm:text-xl">
                    Colchão {size.name}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {size.width}cm × {size.length}cm
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {MATTRESS_HEIGHTS.map((h) => {
                  const price = calculatePrice(
                    size.width,
                    size.length,
                    h,
                    density.pricePerM3
                  );
                  return (
                    <div
                      key={h}
                      className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] transition-colors group"
                    >
                      <span className="text-slate-300 text-sm font-medium">
                        <i className="fa-solid fa-ruler-vertical mr-2 text-slate-500 text-xs"></i>
                        Espessura {h}cm
                      </span>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`${density.colorText} font-bold text-sm sm:text-base`}>
                          {formatCurrency(price)}
                        </span>
                        <a
                          href={`https://wa.me/5541988442226?text=${encodeURIComponent(
                            `Olá! Gostaria de um colchão ${size.name} (${size.width}x${size.length}cm) com ${h}cm de espessura, densidade ${density.name}. Valor estimado: ${formatCurrency(price)}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 text-green-400 hover:text-green-300 transition-all text-xs"
                          title="Pedir via WhatsApp"
                        >
                          <i className="fa-brands fa-whatsapp text-lg"></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Full Sheets Section */}
        <div className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${density.color} flex items-center justify-center flex-shrink-0`}
            >
              <i className="fa-solid fa-expand text-white text-lg sm:text-xl"></i>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg sm:text-xl">
                Lâminas Inteiras
              </h4>
              <p className="text-slate-400 text-sm">
                Tamanho padrão: {SHEET_SIZE.width}cm × {SHEET_SIZE.length}cm (2,10m × 3,10m)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20].map((h) => {
              const price = calculatePrice(
                SHEET_SIZE.width,
                SHEET_SIZE.length,
                h,
                density.pricePerM3
              );
              return (
                <div
                  key={h}
                  className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] transition-colors"
                >
                  <span className="text-slate-300 text-sm font-medium">
                    {h}cm
                  </span>
                  <span className={`${density.colorText} font-bold text-sm sm:text-base`}>
                    {formatCurrency(price)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

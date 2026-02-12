import { DENSITIES, formatCurrency } from '../data/constants';

const THICKNESSES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

export function PriceTable() {
  return (
    <section id="precos" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-4">
            <i className="fa-solid fa-table text-yellow-500 text-xs"></i>
            <span className="text-yellow-500 text-xs font-semibold uppercase tracking-wider">
              Tabela de Preços
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Preço por metro quadrado{' '}
            <span className="text-yellow-500">(m²)</span>
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Valores de referência por m² para cada densidade e espessura.
          </p>
        </div>

        {/* Table Card */}
        <div className="glass-strong rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-4 sm:px-6 py-3 sm:py-4 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    Espessura
                  </th>
                  {DENSITIES.map((d) => (
                    <th
                      key={d.id}
                      className="text-center px-3 sm:px-4 py-3 sm:py-4"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className={`font-bold text-sm ${d.colorText}`}>
                          {d.name}
                        </span>
                        <span className="text-slate-500 text-xs">{d.label}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {THICKNESSES.map((t, idx) => (
                  <tr
                    key={t}
                    className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                      idx % 2 === 0 ? 'bg-white/[0.02]' : ''
                    }`}
                  >
                    <td className="px-4 sm:px-6 py-2.5 sm:py-3 text-white font-semibold text-sm">
                      {t} cm
                    </td>
                    {DENSITIES.map((d) => {
                      const pricePerM2 = d.pricePerM2Per1cm * t;
                      return (
                        <td
                          key={d.id}
                          className="text-center px-3 sm:px-4 py-2.5 sm:py-3 text-slate-300 text-sm font-medium"
                        >
                          {formatCurrency(pricePerM2)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white/[0.02] border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            <span className="text-slate-500 text-xs">
              <i className="fa-solid fa-info-circle mr-1"></i>
              Valores por m² (metro quadrado) – Referência para cálculo
            </span>
            <a
              href="#simulador"
              className="text-yellow-500 hover:text-yellow-400 text-xs font-semibold transition-colors"
            >
              Usar Simulador <i className="fa-solid fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>

        {/* Price per m³ reference */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {DENSITIES.map((d) => (
            <div
              key={d.id}
              className={`glass rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center hover:bg-white/10 transition-all duration-300 group`}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
              >
                <i className={`fa-solid ${d.icon} text-white text-base sm:text-lg`}></i>
              </div>
              <h4 className="text-white font-bold text-base sm:text-lg">{d.name}</h4>
              <p className="text-slate-400 text-xs mb-2">{d.label}</p>
              <p className={`${d.colorText} font-bold text-sm sm:text-base`}>
                {formatCurrency(d.pricePerM3)} / m³
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

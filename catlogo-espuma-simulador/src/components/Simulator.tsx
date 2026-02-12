import { useState, useMemo } from 'react';
import { DENSITIES, MAX_DIMENSIONS, formatCurrency, calculatePrice, buildWhatsAppLink } from '../data/constants';

export function Simulator() {
  const [width, setWidth] = useState<number>(100);
  const [length, setLength] = useState<number>(100);
  const [height, setHeight] = useState<number>(5);
  const [selectedDensity, setSelectedDensity] = useState<string>('D33');

  const density = DENSITIES.find((d) => d.id === selectedDensity)!;

  const price = useMemo(() => {
    if (width > 0 && length > 0 && height > 0) {
      return calculatePrice(width, length, height, density.pricePerM3);
    }
    return 0;
  }, [width, length, height, density]);

  const whatsappLink = useMemo(
    () => buildWhatsAppLink(density.id + ' - ' + density.label, width, length, height, price),
    [density, width, length, height, price]
  );

  const isOverSize =
    width > MAX_DIMENSIONS.width ||
    length > MAX_DIMENSIONS.length ||
    height > MAX_DIMENSIONS.height;

  const handleNumberInput = (
    value: string,
    setter: (val: number) => void,
    max: number
  ) => {
    const num = parseInt(value) || 0;
    setter(Math.min(Math.max(0, num), max));
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-4">
            <i className="fa-solid fa-star text-yellow-500 text-xs"></i>
            <span className="text-yellow-500 text-xs font-semibold uppercase tracking-wider">
              Simulador Premium
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Calcule o preço da sua{' '}
            <span className="text-yellow-500">espuma</span>
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Insira as medidas em centímetros, escolha a densidade e veja o valor
            em tempo real. Máx: {MAX_DIMENSIONS.width}cm × {MAX_DIMENSIONS.length}cm × {MAX_DIMENSIONS.height}cm.
          </p>
        </div>

        {/* Simulator Card */}
        <div className="glass-strong rounded-3xl p-5 sm:p-8 lg:p-10">
          {/* Density Selector */}
          <div className="mb-6 sm:mb-8">
            <label className="text-white font-semibold text-sm mb-3 block">
              <i className="fa-solid fa-layer-group mr-2 text-yellow-500"></i>
              Escolha a Densidade
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {DENSITIES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDensity(d.id)}
                  className={`relative rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all duration-300 text-left group ${
                    selectedDensity === d.id
                      ? `bg-gradient-to-br ${d.color} shadow-lg scale-[1.02]`
                      : 'glass hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <i
                      className={`fa-solid ${d.icon} text-sm sm:text-base ${
                        selectedDensity === d.id ? 'text-white' : d.colorText
                      }`}
                    ></i>
                    <span
                      className={`font-bold text-sm sm:text-base ${
                        selectedDensity === d.id ? 'text-white' : 'text-white'
                      }`}
                    >
                      {d.name}
                    </span>
                  </div>
                  <span
                    className={`text-xs ${
                      selectedDensity === d.id ? 'text-white/80' : 'text-slate-400'
                    }`}
                  >
                    {d.label}
                  </span>
                  {selectedDensity === d.id && (
                    <div className="absolute top-2 right-2">
                      <i className="fa-solid fa-circle-check text-white text-sm"></i>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Width */}
            <div>
              <label className="text-slate-300 text-sm font-medium mb-2 block">
                <i className="fa-solid fa-arrows-left-right mr-2 text-yellow-500"></i>
                Largura (cm)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max={MAX_DIMENSIONS.width}
                  value={width || ''}
                  onChange={(e) => handleNumberInput(e.target.value, setWidth, MAX_DIMENSIONS.width)}
                  placeholder="Ex: 100"
                  className="w-full bg-slate-800/80 border border-slate-600/50 rounded-xl px-4 py-3.5 text-white text-lg font-semibold placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                  cm
                </span>
              </div>
              <span className="text-slate-500 text-xs mt-1 block">Máx: {MAX_DIMENSIONS.width}cm</span>
            </div>

            {/* Length */}
            <div>
              <label className="text-slate-300 text-sm font-medium mb-2 block">
                <i className="fa-solid fa-arrows-up-down mr-2 text-yellow-500"></i>
                Comprimento (cm)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max={MAX_DIMENSIONS.length}
                  value={length || ''}
                  onChange={(e) => handleNumberInput(e.target.value, setLength, MAX_DIMENSIONS.length)}
                  placeholder="Ex: 100"
                  className="w-full bg-slate-800/80 border border-slate-600/50 rounded-xl px-4 py-3.5 text-white text-lg font-semibold placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                  cm
                </span>
              </div>
              <span className="text-slate-500 text-xs mt-1 block">Máx: {MAX_DIMENSIONS.length}cm</span>
            </div>

            {/* Height */}
            <div>
              <label className="text-slate-300 text-sm font-medium mb-2 block">
                <i className="fa-solid fa-up-down mr-2 text-yellow-500"></i>
                Espessura (cm)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max={MAX_DIMENSIONS.height}
                  value={height || ''}
                  onChange={(e) => handleNumberInput(e.target.value, setHeight, MAX_DIMENSIONS.height)}
                  placeholder="Ex: 5"
                  className="w-full bg-slate-800/80 border border-slate-600/50 rounded-xl px-4 py-3.5 text-white text-lg font-semibold placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                  cm
                </span>
              </div>
              <span className="text-slate-500 text-xs mt-1 block">Máx: {MAX_DIMENSIONS.height}cm</span>
            </div>
          </div>

          {/* Warning */}
          {isOverSize && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 flex items-center gap-3">
              <i className="fa-solid fa-triangle-exclamation text-red-400"></i>
              <span className="text-red-300 text-sm">
                Dimensões acima do limite máximo de corte. Ajuste os valores.
              </span>
            </div>
          )}

          {/* Result */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-2xl p-5 sm:p-8 border border-slate-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <span className="text-slate-400 text-sm block mb-1">Valor estimado</span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                  {price > 0 && !isOverSize ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
                      {formatCurrency(price)}
                    </span>
                  ) : (
                    <span className="text-slate-600">R$ 0,00</span>
                  )}
                </div>
                <div className="text-slate-500 text-xs sm:text-sm mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
                  <span>
                    <i className="fa-solid fa-cube mr-1"></i>
                    {density.name} ({density.label})
                  </span>
                  <span>•</span>
                  <span>
                    {width}cm × {length}cm × {height}cm
                  </span>
                </div>
              </div>

              <a
                href={price > 0 && !isOverSize ? whatsappLink : '#'}
                target={price > 0 && !isOverSize ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (price <= 0 || isOverSize) e.preventDefault();
                }}
                className={`w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 ${
                  price > 0 && !isOverSize
                    ? 'bg-green-500 hover:bg-green-600 text-white hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 cursor-pointer'
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Solicitar via WhatsApp
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-slate-500 text-xs">
            <span>
              <i className="fa-solid fa-info-circle mr-1"></i>
              Valores sujeitos a confirmação
            </span>
            <span>
              <i className="fa-solid fa-ruler mr-1"></i>
              Todas as medidas em cm
            </span>
            <span>
              <i className="fa-solid fa-scissors mr-1"></i>
              Corte máx: 210×160×100cm
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

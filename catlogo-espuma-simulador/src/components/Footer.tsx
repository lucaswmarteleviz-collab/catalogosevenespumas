const logoImg = '/logo-seven-espumas.jpg';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900/80">
      {/* Info Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {/* Minimum Order */}
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-receipt text-yellow-500 text-lg"></i>
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm">Pedido Mínimo</h5>
              <p className="text-slate-400 text-xs sm:text-sm">
                Pedidos a partir de R$ 500,00
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-truck text-yellow-500 text-lg"></i>
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm">Prazo de Entrega</h5>
              <p className="text-slate-400 text-xs sm:text-sm">
                Consulte conosco — não temos pronta entrega
              </p>
            </div>
          </div>

          {/* Custom */}
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-scissors text-yellow-500 text-lg"></i>
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm">Corte Sob Medida</h5>
              <p className="text-slate-400 text-xs sm:text-sm">
                Máx: 210cm × 160cm × 100cm
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Brand with Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Seven Espumas"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-slate-500 text-xs">
                © 2026 Seven Espumas. Todos os direitos reservados.
              </p>
              <p className="text-slate-600 text-xs mt-1">
                Valores sujeitos a alteração sem aviso prévio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

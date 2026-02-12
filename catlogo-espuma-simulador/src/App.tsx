import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Simulator } from './components/Simulator';
import { PriceTable } from './components/PriceTable';
import { Mattresses } from './components/Mattresses';
import { DensityGuide } from './components/DensityGuide';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <Simulator />
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        </div>
        <PriceTable />
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        </div>
        <Mattresses />
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        </div>
        <DensityGuide />
      </main>
      <Footer />
    </div>
  );
}

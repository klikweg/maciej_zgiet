import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Header from './components/Header';
import Massage from './components/Massage';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Massage />
        <Benefits />
        <Pricing />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

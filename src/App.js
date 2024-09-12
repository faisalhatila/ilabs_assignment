import logo from './logo.svg';
import './App.css';
import Hero from './sections/Hero';
import ClientMarquee from './components/ClientMarquee';
import ExploreMarketPlace from './components/ExploreMarketPlace';
import Efficiency from './components/Efficiency';
import LatestTechnology from './components/LatestTechnology';
import NoHassle from './components/NoHassle';
import Footer from './components/Footer';

function App() {
  const clientMarque = [
    '/assets/images/clients-logos/Client1.png',
    '/assets/images/clients-logos/Client2.png',
    '/assets/images/clients-logos/Client3.png',
    '/assets/images/clients-logos/Client4.png',
    '/assets/images/clients-logos/Client5.png',
    '/assets/images/clients-logos/Client6.png',
    '/assets/images/clients-logos/Client7.png',
    '/assets/images/clients-logos/Client8.png',
    '/assets/images/clients-logos/Client9.png',
  ];
  return (
    <>
      <Hero />
      <ClientMarquee logos={clientMarque} />
      <ExploreMarketPlace />
      <Efficiency />
      <LatestTechnology />
      <NoHassle />
      <Footer />
    </>
  );
}

export default App;

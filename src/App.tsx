import { HomeHero } from "./components/HomeHero";
import { Header } from "./components/Header";
import { ScrollManager } from "./components/ScrollManager";
import { HomeLore } from "./components/HomeLore";
import { HomeHelpers } from "./components/HomeHelpers";
import { HomeMiddle } from "./components/HomeMiddle";
import { Cards } from "./components/Cards";
import { CoWorkerHero } from "./components/CoWorkerHero";
import BusinessHero from "./components/BusinessHero";
import Tools from "./components/Tools";
import Workspaces from "./components/Workspaces";
import Reviews from "./components/Reviews";
import KnowledgeHero from "./components/KnowledgeHero";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ScrollManager />
      <Header />
      <HomeHero />
      <HomeLore />
      <HomeHelpers />
      <HomeMiddle />
      <Cards />
      <CoWorkerHero />
      <BusinessHero />
      <Tools />
      <Workspaces />
      <Reviews />
      <KnowledgeHero />
      <Footer />
    </div>
  );
}

export default App;

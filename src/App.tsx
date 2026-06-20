import { ThemeProvider } from "./hooks/useTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TrustMarquee from "./components/TrustMarquee";
import Capabilities from "./components/Capabilities";
import About from "./components/About";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Products />
          <TrustMarquee />
          <Capabilities />
          <About />
        </main>
        <Footer />
        <FloatingActions />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

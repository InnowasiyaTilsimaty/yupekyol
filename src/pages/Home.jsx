import { Suspense, lazy, useEffect, useState } from "react";
const About = lazy(() => import("../components/About"));
const Catalog = lazy(() => import("../components/Catalog"));
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));
const Hero = lazy(() => import("../components/Hero"));
import PageWrapper from "../components/ScrollProvider";
import GlobalStyles from "../styles/global";
import "../styles/styles.css";
import Preloader from "../components/Preloader";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Services from "../components/Services";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 3500);
    })();
  }, []);

  return (
    <>
      <GlobalStyles />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <PageWrapper>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Header delayTime={4.3} />
        <Hero />
        <Suspense fallback={<h1>.</h1>}>
          <About />
          <Services />
          <Catalog />

          <Footer />
        </Suspense>
      </PageWrapper>
    </>
  );
}

export default Home;

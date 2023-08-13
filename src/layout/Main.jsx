import Aos from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Outlet, useLocation } from "react-router-dom";
import OfferCard from "../components/OfferCard";
import Header from "../shared/Header";

const Main = () => {
  // offer condition
  const location = useLocation();
  const offer = true;

  // aos animation effect init
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div>
      {/* helmet for title  */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>GadgetHub | Home</title>
      </Helmet>

      {location.pathname === "/" && offer && <OfferCard />}
      <Header />

      {/* rest all home section in outlet  */}
      <Outlet />
    </div>
  );
};

export default Main;

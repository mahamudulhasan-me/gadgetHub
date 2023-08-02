import { Outlet, useLocation } from "react-router-dom";
import OfferCard from "../components/OfferCard";
import Header from "../shared/Header";

const Main = () => {
  const location = useLocation();
  const offer = true;
  return (
    <div>
      {location.pathname === "/" && offer && <OfferCard />}
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;

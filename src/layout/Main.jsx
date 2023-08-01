import { Outlet } from "react-router-dom";
import OfferCard from "../components/OfferCard";
import Header from "../shared/Header";

const Main = () => {
  return (
    <div>
      <OfferCard />
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;

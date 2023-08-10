import { FaPhoneAlt } from "react-icons/fa";

const OfferCard = () => {
  return (
    <div className=" px-[10%] flex justify-between items-center bg-p1 text-white py-1">
      <p className=" md:flex items-center gap-1 hidden">
        <FaPhoneAlt /> +8801710142370
      </p>
      <p>Get 50% off on selected items | Shop Now</p>
      <div className="md:flex items-center gap-3 hidden">
        <select name="language" id="" className="bg-transparent outline-none ">
          <option value="english" className="text-gray-700">
            Eng
          </option>
          <option value="bangla" className="text-gray-700">
            Ban
          </option>
        </select>
        <select name="location" id="" className="bg-transparent outline-none ">
          <option value="" className="text-gray-700">
            Location
          </option>
          <option value="bangla" className="text-gray-700">
            India
          </option>
          <option value="bangla" className="text-gray-700">
            USA
          </option>
        </select>
      </div>
    </div>
  );
};

export default OfferCard;

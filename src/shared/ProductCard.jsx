import { Rating, ThinStar } from "@smastrom/react-rating";

const ProductCard = ({ product }) => {
  const {
    short_features,
    title,
    price,
    rating,
    total_rating,
    description,
    category,
    thumbnail,
  } = product;
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#003D2A",
    inactiveFillColor: "#BCEDC5",
  };
  return (
    <div className="flex flex-col justify-between">
      <figure className="w-full bg-[#F5F6F6] justify-center items-center">
        <img src={thumbnail} alt="" />
      </figure>
      <div>
        <h1 className="flex font-semibold justify-between gap-1">
          <span>{title}</span> <span>${price}</span>
        </h1>
        <p className="text-sm text-gray-600">{short_features}</p>
        <p className="flex">
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
            itemStyles={myStyles}
          />
          <span>({total_rating})</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

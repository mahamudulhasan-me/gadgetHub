const ProductCard = ({ product }) => {
  const { id, title, price, description, category, thumbnail } = product;
  return (
    <div className="bg-[#F5F6F6] rounded-lg flex flex-col justify-between items-center">
      <figure className="w-full bg-[#F5F6F6] justify-center items-center">
        <img
          src={thumbnail}
          alt=""
          className="rounded-t-lg
        "
        />
      </figure>
      <div>
        <h1>
          <span>{title}</span> {price}
        </h1>
      </div>
    </div>
  );
};

export default ProductCard;

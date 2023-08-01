const ProductCard = ({ product }) => {
  const { id, title, price, description, category, thumbnail } = product;
  return (
    <div className="flex flex-col justify-between items-center">
      <figure className="w-full bg-[#F5F6F6] justify-center items-center">
        <img src={thumbnail} alt="" />
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

import { Link } from "react-router-dom";

export default function ProductCard({ imgLink, name }) {
  return (
    <Link to={`/productDetails/${name}`}>
      <img
        src={imgLink}
        alt="product-image"
        className="w-[300px] h-[220px] rounded-md object-fill scale-100 hover:scale-105 duration-500 ease-in-out"
      />

      <p className="max-w-[300px] font-semibold text-xl mt-2 text-wrap">
        {name.slice(0,29)}
      </p>
    </Link>
  );
}

export default function Card({ items }) {
  const { name, image, price, recipe } = items;
  return (
    <div>
      <figure className="relative">
        <img src={image} alt="Shoes" className="w-full object-contain" />
        <span className="absolute right-3 top-3 bg-black px-4 py-1 text-white">{price}</span>
      </figure>

      <div className="card-body items-center text-center bg-base-200">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm">{recipe}</p>
        <div className="card-actions">
          <button className="btn text-[#BB8506] uppercase font-semibold btn-outline border-0 border-b-4 mt-4 bg-gray-300">Add To card</button>
        </div>
      </div>
    </div>
  );
}

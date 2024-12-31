import { Link } from "react-router-dom";
import MenuCover from "../Shared/MenuCover/MenuCover";
import OutMenu from "../Shared/OutMenu/OutMenu";

export default function MenuCategory({ items, Img, title, dricaption }) {
  return (
    <section>
      <MenuCover title={title} dricaption={dricaption} Img={Img} />
      <div className="grid grid-cols-2 gap-10 my-10">
        {items?.map((item) => (
          <OutMenu item={item} key={item._id} />
        ))}
      </div>
      <div className="flex items-center justify-center mb-10">
        <Link to={`/shop/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </section>
  );
}

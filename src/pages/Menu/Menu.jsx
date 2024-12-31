import cover from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import Deseart from "../../assets/menu/dessert-bg.jpeg";
import Pizza from "../../assets/menu/pizza-bg.jpg";
import Salad from "../../assets/menu/salad-bg.jpg";
import Soup from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");

  return (
    <div>
      <section>
        <MenuCategory
          items={offered}
          title="offered"
          dricaption="would you like to try a dish"
          Img={cover}
        />
      </section>
      <SectionTitle heading="---Don't miss---" subHeading="TODAY'S OFFER" />
      <section>
        <MenuCategory
          items={dessert}
          title="dessert"
          dricaption="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          Img={Deseart}
        />
      </section>
      <section>
        <MenuCategory
          items={pizza}
          title="pizza"
          dricaption="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          Img={Pizza}
        />
      </section>
      <section>
        <MenuCategory
          items={salad}
          title="salad"
          dricaption="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          Img={Salad}
        />  
      </section>
      <section>
        <MenuCategory
          items={soup}
          title="soup"
          dricaption="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          Img={Soup}
        />
      </section>
    </div>
  );
}

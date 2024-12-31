import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Card from "../../Shared/Card/Card";

export default function Salad() {
  const [menu] = useMenu();
  const Salad = menu?.filter((item) => item.category === "salad");
  return (
    <div>
      <SectionTitle heading="---Should Try---" subHeading="CHEF RECOMMENDS" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Salad?.slice(0, 3).map((item) => (
          <Card items={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

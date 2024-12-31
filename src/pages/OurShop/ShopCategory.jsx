import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import Card from "../Shared/Card/Card";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function ShopCategory() {
  
  const  categories = ['salad','pizza', 'soup', 'dessert', 'drinks','offered'] 
  const {category} = useParams();
  const initInx = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initInx);


  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const offered = menu?.filter((item) => item.category === "offered");
  
  console.log({initInx})
  return (
    <div className="text-center my-10 uppercase">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <section className="my-10">
          <TabPanel>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {salad?.map((item) => (
                <Card items={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {pizza?.map((item) => (
                <Card items={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {soup?.map((item) => (
                <Card items={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {dessert?.map((item) => (
                <Card items={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {drinks?.map((item) => (
                <Card items={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {offered?.map((item) => (
                <Card items={item} key={item._id} />
              ))}
            </div>
          </TabPanel>
        </section>
      </Tabs>
    </div>
  );
}

import MenuCover from "../Shared/MenuCover/MenuCover";
import shop from '../../assets/shop/banner2.jpg'
import ShopCategory from "./ShopCategory";

export default function OurShop() {
  return (
    <div>
      <MenuCover Img={shop} title='our shop' dricaption='Would you like to try a dish'/>
      <ShopCategory/>
    </div>
  )
}

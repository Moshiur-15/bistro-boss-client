import { useEffect, useState } from "react";

const useMenu = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    const menuData = async () => {
      const res = await fetch("http://localhost:3000/menu");
      const data = await res.json();
      setMenu(data);
      setLoading(false);
    };
    menuData();
  }, []);
  return [menu, loading];
};
export default useMenu;

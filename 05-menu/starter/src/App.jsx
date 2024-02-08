import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ["all", ...tempSet];

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;

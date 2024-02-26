import React from "react";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return <div>Home</div>;
};

export default Home;

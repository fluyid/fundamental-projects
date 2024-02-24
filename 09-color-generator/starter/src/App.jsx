import { useState } from "react";
import ColourList from "./ColourList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  return (
    <main>
      <Form />
      <ColourList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;

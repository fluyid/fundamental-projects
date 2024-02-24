import { useState } from "react";
import ColourList from "./ColourList";
import Form from "./Form";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  return (
    <main>
      <Form />
      <ColourList colors={colors} />
    </main>
  );
};
export default App;

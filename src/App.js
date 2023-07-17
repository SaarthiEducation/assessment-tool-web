import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import TestOne from "./Components/Assesments/TestOne";
import TestTwo from "./Components/Assesments/TestTwo";
import TestThree from "./Components/Assesments/TestThree";
import TestFour from "./Components/Assesments/TestFour";
import LayOut from "./Components/Assesments/LayOut";

import Scoreboard from "./Components/Scoreboard";
import NoPage from "./Components/NoPage";
import './Css/style.css';

 function App() {
  return (
    <div classname="main-container-2">
      <Routes>
      
        <Route path="/" exact element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="testone" exact element={<TestOne />} />
          <Route path="LayOut" exact element={<LayOut />} />
          <Route path="test2" exact element={<TestTwo />} /> 
          <Route path="test1" exact element={<TestThree />} />
          <Route path="test4" exact element={<TestFour />} />
          <Route path="Scoreboard" exact element={<Scoreboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
       
      </Routes>
    </div>
  );
}
export default App;

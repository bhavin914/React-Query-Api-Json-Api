import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "../components/create";
import Delete from "../components/delete";
import Homepage from "../components/home";
import Newhomepage from "../components/home2";
import Update from "../components/update";
import Formlist from "../hookform";
// import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Create />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/newhome" element={<Newhomepage />} />
        <Route path="/form" element={<Formlist />} />
      </Routes>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </BrowserRouter>
  );
};

export default App;

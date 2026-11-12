// import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";
import Home from "./pages/Home";

const App = () => {
  // const [Toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-col h-screen w-screen p-2 bg-black">
      {/* {Toggle ? (
        <Register setToggle={setToggle} />
      ) : (
        <>
          <Welcome />
          <div className="h-full border-l border-white/20" />
          <Login setToggle={setToggle}/>
        </>
      )} */}


      <Navbar />
      <AppRouter />
      
    </div>
  );
};

export default App;

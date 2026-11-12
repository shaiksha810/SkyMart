import React from "react";
import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Topproducts from "../components/Topproducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Dashboard />
      <Topproducts />
      <Footer />
    </div>
  );
};

export default Home;

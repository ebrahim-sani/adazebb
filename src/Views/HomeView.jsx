import React from "react";
import { Navbar } from "../components";
import {
  About,
  Footer,
  Header,
  Showcase,
  SubscriptionPlans,
} from "../contents";
import GetStarted from "../contents/GetStarted/GetStarted";

const HomeView = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <GetStarted />
      <SubscriptionPlans />
      <Showcase />
      <Footer />
    </div>
  );
};

export default HomeView;

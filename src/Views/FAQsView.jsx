import React, { useEffect, useState } from "react";
import { FAQs, Navbar } from "../components";
import { Footer } from "../contents";
// import data from "../components/FAQs/data";

const FAQsView = () => {
  // const [faqsData, setFaqsData] = useState({});

  // useEffect(() => {
  //   fetch("/FaqsContent.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFaqsData(data);
  //     });
  // }, []);

  // console.log(data);

  return (
    <>
      <Navbar />
      <FAQs />
      <Footer />
    </>
  );
};

export default FAQsView;

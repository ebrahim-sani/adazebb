import React, { useState } from "react";
// import { data } from "./data";
import "./FAQs.scss";
import { getData } from "./data";

const FAQs = () => {
  const [faqData, setFaqData] = useState(getData);
  console.log(faqData);
  return (
    <div className="app__faqs">
      <div className="app__faqs-head">
        <h2>FAQs</h2>
      </div>
      <div className="app__faqs-component">
        {faqData?.map(({ title, question, answer }, i) => (
          <div className="app__faqs-con" key={i}>
            <h3>{title}</h3>
            <h4>{question}</h4>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
